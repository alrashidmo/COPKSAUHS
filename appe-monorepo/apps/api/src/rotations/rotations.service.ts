import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { RotationDto } from '@appe/shared';

@Injectable()
export class RotationsService {
  constructor(private prisma: PrismaService) {}

  async getAvailableRotations(): Promise<RotationDto[]> {
    const rotations = await this.prisma.rotation.findMany({
      where: { isActive: true },
      orderBy: { startDate: 'asc' },
    });

    return rotations.map((r) => ({
      id: r.id,
      name: r.name,
      rotationType: r.rotationType,
      blockNumber: r.blockNumber,
      startDate: r.startDate,
      endDate: r.endDate,
      requiredHours: r.requiredHours,
      description: r.description,
    }));
  }
}
