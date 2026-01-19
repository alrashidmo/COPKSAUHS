import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateAwardDto, AwardRecordDto } from '@appe/shared';

@Injectable()
export class AwardsService {
  constructor(private prisma: PrismaService) {}

  async create(studentProfileId: string, dto: CreateAwardDto) {
    return this.prisma.awardRecord.create({
      data: {
        studentProfileId,
        ...dto,
        status: 'DRAFT',
      },
    });
  }

  async findAll(studentProfileId: string): Promise<AwardRecordDto[]> {
    return this.prisma.awardRecord.findMany({
      where: { studentProfileId },
      orderBy: { dateReceived: 'desc' },
    });
  }

  async submit(id: string, studentProfileId: string) {
    return this.prisma.awardRecord.update({
      where: { id, studentProfileId },
      data: {
        status: 'SUBMITTED',
        submittedAt: new Date(),
      },
    });
  }

  async delete(id: string, studentProfileId: string) {
    return this.prisma.awardRecord.delete({
      where: { id, studentProfileId },
    });
  }
}
