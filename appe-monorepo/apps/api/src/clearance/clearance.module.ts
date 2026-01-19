import { Module } from '@nestjs/common';
import { ClearanceController } from './clearance.controller';
import { ClearanceService } from './clearance.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ClearanceController],
  providers: [ClearanceService, PrismaService],
})
export class ClearanceModule {}
