import { Module } from '@nestjs/common';
import { ParticipationController } from './participation.controller';
import { ParticipationService } from './participation.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ParticipationController],
  providers: [ParticipationService, PrismaService],
})
export class ParticipationModule {}
