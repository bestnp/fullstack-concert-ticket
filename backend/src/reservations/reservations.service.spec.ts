import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ReservationStatus } from '../../generated/prisma';

import { createPrismaMock, type PrismaMock } from '../../test/mocks/prisma.mock';
import { ReservationsService } from './reservations.service';

describe('ReservationsService', () => {
  let prisma: PrismaMock;
  let service: ReservationsService;

  beforeEach(() => {
    prisma = createPrismaMock();
    prisma.$transaction.mockImplementation(async (arg: any) => {
      if (typeof arg === 'function') {
        return arg(prisma);
      }
      return Promise.all(arg);
    });
    service = new ReservationsService(prisma as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const baseUser = { id: 'user-1' } as any;
  const baseConcert = { id: 'concert-1', totalSeats: 100, reservedSeats: 10 } as any;

  describe('reserve', () => {
    it('throws when user not found', async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(service.reserve({ userId: 'user-1', concertId: 'concert', note: '' })).rejects.toBeInstanceOf(
        NotFoundException,
      );
    });

    it('throws when concert not found', async () => {
      prisma.user.findUnique.mockResolvedValue(baseUser);
      prisma.concert.findUnique.mockResolvedValue(null);

      await expect(service.reserve({ userId: 'user-1', concertId: 'concert', note: '' })).rejects.toBeInstanceOf(
        NotFoundException,
      );
    });

    it('throws when reservation already exists', async () => {
      prisma.user.findUnique.mockResolvedValue(baseUser);
      prisma.concert.findUnique.mockResolvedValue(baseConcert);
      prisma.reservation.findUnique.mockResolvedValue({ status: ReservationStatus.RESERVED } as any);

      await expect(service.reserve({ userId: 'user-1', concertId: 'concert', note: '' })).rejects.toBeInstanceOf(
        BadRequestException,
      );
    });

    it('throws when concert is sold out', async () => {
      prisma.user.findUnique.mockResolvedValue(baseUser);
      prisma.concert.findUnique.mockResolvedValue(baseConcert);
      prisma.reservation.findUnique.mockResolvedValue(null);
      prisma.concert.updateMany.mockResolvedValue({ count: 0 } as any);

      await expect(service.reserve({ userId: 'user-1', concertId: 'concert-1' })).rejects.toBeInstanceOf(
        BadRequestException,
      );
    });

    it('creates a reservation when seats are available', async () => {
      prisma.user.findUnique.mockResolvedValue(baseUser);
      prisma.concert.findUnique.mockResolvedValue(baseConcert);
      prisma.reservation.findUnique.mockResolvedValue(null);
      prisma.concert.updateMany.mockResolvedValue({ count: 1 } as any);
      const reservation = { id: 'reservation-1' } as any;
      prisma.reservation.create.mockResolvedValue(reservation);
      prisma.concert.findUniqueOrThrow.mockResolvedValue({ ...baseConcert, reservedSeats: 11 });
      prisma.reservationHistory.create.mockResolvedValue({} as any);

      const result = await service.reserve({ userId: 'user-1', concertId: 'concert-1' });

      expect(prisma.reservation.create).toHaveBeenCalledWith({ data: { userId: 'user-1', concertId: 'concert-1' } });
      expect(prisma.reservationHistory.create).toHaveBeenCalledWith({
        data: expect.objectContaining({ reservationId: reservation.id, action: 'RESERVE' }),
      });
      expect(result).toEqual({
        reservation,
        concert: { id: 'concert-1', totalSeats: 100, reservedSeats: 11 },
      });
    });
  });

  describe('cancel', () => {
    const dto = { userId: 'user-1', concertId: 'concert-1' };

    it('throws when reservation absent', async () => {
      prisma.reservation.findUnique.mockResolvedValue(null);

      await expect(service.cancel(dto)).rejects.toBeInstanceOf(BadRequestException);
    });

    it('throws when decrement fails', async () => {
      prisma.reservation.findUnique.mockResolvedValue({ id: 'res-1', status: ReservationStatus.RESERVED } as any);
      prisma.concert.updateMany.mockResolvedValue({ count: 0 } as any);

      await expect(service.cancel(dto)).rejects.toBeInstanceOf(BadRequestException);
    });

    it('updates reservation and logs history', async () => {
      prisma.reservation.findUnique.mockResolvedValue({ id: 'res-1', status: ReservationStatus.RESERVED } as any);
      prisma.concert.updateMany.mockResolvedValue({ count: 1 } as any);
      const updated = { id: 'res-1', status: ReservationStatus.CANCELLED } as any;
      prisma.reservation.update.mockResolvedValue(updated);
      prisma.concert.findUniqueOrThrow.mockResolvedValue({ ...baseConcert, reservedSeats: 9 });

      const result = await service.cancel(dto);

      expect(prisma.reservation.update).toHaveBeenCalledWith({
        where: { id: 'res-1' },
        data: expect.objectContaining({ status: ReservationStatus.CANCELLED }),
      });
      expect(prisma.reservationHistory.create).toHaveBeenCalledWith({
        data: expect.objectContaining({ reservationId: 'res-1', action: 'CANCEL' }),
      });
      expect(result.reservation).toEqual(updated);
    });
  });

  describe('history', () => {
    it('throws when user not found for historyByUser', async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(service.historyByUser('missing')).rejects.toBeInstanceOf(NotFoundException);
    });

    it('returns user history ordered by occurredAt', async () => {
      prisma.user.findUnique.mockResolvedValue(baseUser);
      const history = [{ id: 'h1' }] as any;
      prisma.reservationHistory.findMany.mockResolvedValue(history);

      await expect(service.historyByUser('user-1')).resolves.toEqual(history);
      expect(prisma.reservationHistory.findMany).toHaveBeenCalledWith({
        where: { userId: 'user-1' },
        include: {
          concert: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: { occurredAt: 'desc' },
      });
    });

    it('returns global history with user and concert info', async () => {
      const history = [{ id: 'h1' }] as any;
      prisma.reservationHistory.findMany.mockResolvedValue(history);

      await expect(service.historyAll()).resolves.toEqual(history);
      expect(prisma.reservationHistory.findMany).toHaveBeenCalledWith({
        include: {
          concert: {
            select: {
              id: true,
              name: true,
            },
          },
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
        },
        orderBy: { occurredAt: 'desc' },
      });
    });
  });
});
