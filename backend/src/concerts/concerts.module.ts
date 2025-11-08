import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { ConcertsController } from './concerts.controller';
import { ConcertsService } from './concerts.service';

@Module({
  imports: [PrismaModule],
  controllers: [ConcertsController],
  providers: [ConcertsService],
  exports: [ConcertsService],
})
export class ConcertsModule {}

