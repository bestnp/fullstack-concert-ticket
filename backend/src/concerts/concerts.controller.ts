import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';

import { CreateConcertDto } from './dto/create-concert.dto';
import { ConcertsService } from './concerts.service';

@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Post()
  create(@Body() dto: CreateConcertDto) {
    return this.concertsService.create(dto);
  }

  @Get()
  findAll(@Query('userId') userId?: string) {
    return this.concertsService.findAll(userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.concertsService.remove(id);
    return { message: 'Concert removed' };
  }
}

