import { NotFoundException } from '@nestjs/common';

import { createPrismaMock, type PrismaMock } from '../../test/mocks/prisma.mock';
import { ConcertsService } from './concerts.service';

describe('ConcertsService', () => {
  let prisma: PrismaMock;
  let service: ConcertsService;

  beforeEach(() => {
    prisma = createPrismaMock();
    prisma.$transaction.mockImplementation(async (arg: any) => {
      if (typeof arg === 'function') {
        return arg(prisma);
      }
      return Promise.all(arg);
    });
    service = new ConcertsService(prisma as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('creates a concert', async () => {
    const dto = { name: 'Show', description: 'Great', totalSeats: 100 };
    const created = { id: '1', ...dto } as any;
    prisma.concert.create.mockResolvedValue(created);

    await expect(service.create(dto)).resolves.toEqual(created);
    expect(prisma.concert.create).toHaveBeenCalledWith({ data: dto });
  });

  it('returns concerts with available seats when no user provided', async () => {
    prisma.concert.findMany.mockResolvedValue([
      { id: '1', totalSeats: 100, reservedSeats: 40 },
      { id: '2', totalSeats: 50, reservedSeats: 10 },
    ] as any);

    const result = await service.findAll();

    expect(result).toEqual([
      { id: '1', totalSeats: 100, reservedSeats: 40, availableSeats: 60 },
      { id: '2', totalSeats: 50, reservedSeats: 10, availableSeats: 40 },
    ]);
    expect(prisma.concert.findMany).toHaveBeenCalledWith({ orderBy: { startDateTime: 'asc' } });
  });

  it('returns concerts enriched with user reservation info when userId provided', async () => {
    prisma.concert.findMany.mockResolvedValue([
      {
        id: '1',
        totalSeats: 100,
        reservedSeats: 20,
        reservations: [{ status: 'RESERVED' }, { status: 'CANCELLED' }],
      },
      {
        id: '2',
        totalSeats: 40,
        reservedSeats: 5,
        reservations: [{ status: 'CANCELLED' }],
      },
    ] as any);

    const result = await service.findAll('user-1');

    expect(result).toEqual([
      expect.objectContaining({
        id: '1',
        totalSeats: 100,
        reservedSeats: 20,
        availableSeats: 80,
        reservedByUser: true,
      }),
      expect.objectContaining({
        id: '2',
        totalSeats: 40,
        reservedSeats: 5,
        availableSeats: 35,
        reservedByUser: false,
      }),
    ]);
    expect(prisma.concert.findMany).toHaveBeenCalledWith({
      orderBy: { startDateTime: 'asc' },
      include: {
        reservations: {
          where: { userId: 'user-1' },
          select: { status: true },
        },
      },
    });
  });

  it('removes a concert and associated data', async () => {
    prisma.concert.findUnique.mockResolvedValue({ id: 'concert-1' } as any);
    prisma.reservationHistory.deleteMany.mockResolvedValue({ count: 1 } as any);
    prisma.reservation.deleteMany.mockResolvedValue({ count: 1 } as any);
    prisma.concert.delete.mockResolvedValue({} as any);

    await expect(service.remove('concert-1')).resolves.toBeUndefined();
    expect(prisma.concert.findUnique).toHaveBeenCalledWith({ where: { id: 'concert-1' } });
    expect(prisma.reservationHistory.deleteMany).toHaveBeenCalledWith({ where: { concertId: 'concert-1' } });
    expect(prisma.$transaction).toHaveBeenCalledTimes(1);
  });

  it('throws when removing a non-existent concert', async () => {
    prisma.concert.findUnique.mockResolvedValue(null);

    await expect(service.remove('missing')).rejects.toBeInstanceOf(NotFoundException);
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });
});
