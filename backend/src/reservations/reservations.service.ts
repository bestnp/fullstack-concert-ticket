import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ReservationStatus } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { CancelReservationDto } from './dto/cancel-reservation.dto';
import { ReserveConcertDto } from './dto/reserve-concert.dto';

@Injectable()
export class ReservationsService {
  constructor(private readonly prisma: PrismaService) {}

  async reserve(dto: ReserveConcertDto) {
    const { userId, concertId, note } = dto;

    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const concert = await this.prisma.concert.findUnique({ where: { id: concertId } });
    if (!concert) {
      throw new NotFoundException('Concert not found');
    }

    const existing = await this.prisma.reservation.findUnique({
      where: { userId_concertId: { userId, concertId } },
    });

    if (existing?.status === ReservationStatus.RESERVED) {
      throw new BadRequestException('Concert already reserved by this user');
    }

    return this.prisma.$transaction(async (tx) => {
      const incrementResult = await tx.concert.updateMany({
        where: {
          id: concertId,
          reservedSeats: { lt: concert.totalSeats },
        },
        data: {
          reservedSeats: { increment: 1 },
        },
      });

      if (incrementResult.count === 0) {
        throw new BadRequestException('Concert is sold out');
      }

      const reservation =
        existing != null
          ? await tx.reservation.update({
              where: { id: existing.id },
              data: {
                status: ReservationStatus.RESERVED,
                reservedAt: new Date(),
                cancelledAt: null,
              },
            })
          : await tx.reservation.create({
              data: {
                userId,
                concertId,
              },
            });

      const concertAfter = await tx.concert.findUniqueOrThrow({ where: { id: concertId } });

      await tx.reservationHistory.create({
        data: {
          reservationId: reservation.id,
          userId,
          concertId,
          action: 'RESERVE',
          snapshotSeats: concertAfter.totalSeats - concertAfter.reservedSeats,
          note: note ?? null,
        },
      });

      return {
        reservation,
        concert: concertAfter,
      };
    });
  }

  async cancel(dto: CancelReservationDto) {
    const { concertId, userId, note } = dto;

    const reservation = await this.prisma.reservation.findUnique({
      where: { userId_concertId: { userId, concertId } },
    });

    if (!reservation || reservation.status !== ReservationStatus.RESERVED) {
      throw new BadRequestException('Active reservation not found for this user');
    }

    return this.prisma.$transaction(async (tx) => {
      const decrementResult = await tx.concert.updateMany({
        where: {
          id: concertId,
          reservedSeats: { gt: 0 },
        },
        data: {
          reservedSeats: { decrement: 1 },
        },
      });

      if (decrementResult.count === 0) {
        throw new BadRequestException('Concert seats are already available');
      }

      const updatedReservation = await tx.reservation.update({
        where: { id: reservation.id },
        data: {
          status: ReservationStatus.CANCELLED,
          cancelledAt: new Date(),
        },
      });

      const concertAfter = await tx.concert.findUniqueOrThrow({ where: { id: concertId } });

      await tx.reservationHistory.create({
        data: {
          reservationId: reservation.id,
          userId,
          concertId,
          action: 'CANCEL',
          snapshotSeats: concertAfter.totalSeats - concertAfter.reservedSeats,
          note: note ?? null,
        },
      });

      return {
        reservation: updatedReservation,
        concert: concertAfter,
      };
    });
  }

  async historyByUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.reservationHistory.findMany({
      where: { userId },
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
  }

  historyAll() {
    return this.prisma.reservationHistory.findMany({
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
  }
}

