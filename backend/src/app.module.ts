import { Module } from '@nestjs/common';

import { ConcertsModule } from './concerts/concerts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ReservationsModule } from './reservations/reservations.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, UsersModule, ConcertsModule, ReservationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
