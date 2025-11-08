import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateConcertDto } from './dto/create-concert.dto';

@Injectable()
export class ConcertsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateConcertDto) {
    const { name, description, totalSeats } = dto;
    return this.prisma.concert.create({
      data: {
        name,
        description,
        totalSeats,
      },
    });
  }

  async findAll(userId?: string) {
    if (userId) {
      const concertsWithReservations = await this.prisma.concert.findMany({
        orderBy: { startDateTime: 'asc' },
        include: {
          reservations: {
            where: { userId },
            select: { status: true },
          },
        },
      });

      return concertsWithReservations.map(({ reservations, ...concert }) => {
        const availableSeats = concert.totalSeats - concert.reservedSeats;
        const reservedByUser = reservations.some((reservation) => reservation.status === 'RESERVED');

        return {
          ...concert,
          availableSeats,
          reservedByUser,
        };
      });
    }

    const concerts = await this.prisma.concert.findMany({
      orderBy: { startDateTime: 'asc' },
    });

    return concerts.map((concert) => ({
      ...concert,
      availableSeats: concert.totalSeats - concert.reservedSeats,
    }));
  }

  async remove(concertId: string) {
    const concert = await this.prisma.concert.findUnique({ where: { id: concertId } });
    if (!concert) {
      throw new NotFoundException('Concert not found');
    }

    await this.prisma.$transaction([
      this.prisma.reservationHistory.deleteMany({ where: { concertId } }),
      this.prisma.reservation.deleteMany({ where: { concertId } }),
      this.prisma.concert.delete({ where: { id: concertId } }),
    ]);
  }
}

