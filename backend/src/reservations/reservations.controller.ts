import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { CancelReservationDto } from './dto/cancel-reservation.dto';
import { ReserveConcertDto } from './dto/reserve-concert.dto';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  reserve(@Body() dto: ReserveConcertDto) {
    return this.reservationsService.reserve(dto);
  }

  @Post('cancel')
  cancel(@Body() dto: CancelReservationDto) {
    return this.reservationsService.cancel(dto);
  }

  @Get('history')
  history(@Query('userId') userId?: string) {
    if (userId) {
      return this.reservationsService.historyByUser(userId);
    }

    return this.reservationsService.historyAll();
  }
}
