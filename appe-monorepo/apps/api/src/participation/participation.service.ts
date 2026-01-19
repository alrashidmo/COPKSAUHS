import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateParticipationDto, ParticipationRecordDto } from '@appe/shared';

@Injectable()
export class ParticipationService {
  constructor(private prisma: PrismaService) {}

  async create(studentProfileId: string, dto: CreateParticipationDto) {
    return this.prisma.participationRecord.create({
      data: {
        studentProfileId,
        ...dto,
        status: 'DRAFT',
      },
    });
  }

  async findAll(studentProfileId: string): Promise<ParticipationRecordDto[]> {
    return this.prisma.participationRecord.findMany({
      where: { studentProfileId },
      orderBy: { eventDate: 'desc' },
    });
  }

  async submit(id: string, studentProfileId: string) {
    return this.prisma.participationRecord.update({
      where: { id, studentProfileId },
      data: {
        status: 'SUBMITTED',
        submittedAt: new Date(),
      },
    });
  }

  async delete(id: string, studentProfileId: string) {
    return this.prisma.participationRecord.delete({
      where: { id, studentProfileId },
    });
  }
}
