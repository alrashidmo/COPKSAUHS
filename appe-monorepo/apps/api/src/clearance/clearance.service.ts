import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { ClearanceItemDto } from '@appe/shared';

@Injectable()
export class ClearanceService {
  constructor(private prisma: PrismaService) {}

  async getClearanceItems(studentProfileId: string): Promise<ClearanceItemDto[]> {
    const profile = await this.prisma.studentProfile.findUnique({
      where: { id: studentProfileId },
      select: { program: true },
    });

    const catalogItems = await this.prisma.clearanceCatalogItem.findMany({
      where: {
        OR: [{ program: profile.program }, { program: null }],
      },
    });

    const studentItems = await this.prisma.studentClearanceItem.findMany({
      where: { studentProfileId },
    });

    return catalogItems.map((catalog) => {
      const studentItem = studentItems.find((s) => s.catalogItemId === catalog.id);
      const trafficLight = this.calculateTrafficLight(studentItem);

      return {
        id: studentItem?.id || catalog.id,
        name: catalog.name,
        type: catalog.type,
        description: catalog.description,
        isRequired: catalog.isRequired,
        validityDays: catalog.validityDays,
        status: studentItem?.status || 'NOT_SUBMITTED',
        evidenceUrl: studentItem?.evidenceUrl,
        submittedAt: studentItem?.submittedAt,
        approvedAt: studentItem?.approvedAt,
        expiryDate: studentItem?.expiryDate,
        rejectionReason: studentItem?.rejectionReason,
        trafficLight,
      };
    });
  }

  private calculateTrafficLight(item: any): 'green' | 'yellow' | 'red' {
    if (!item || item.status === 'NOT_SUBMITTED' || item.status === 'REJECTED') {
      return 'red';
    }

    if (item.status === 'APPROVED') {
      if (item.expiryDate) {
        const daysUntilExpiry = Math.ceil(
          (new Date(item.expiryDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
        );
        if (daysUntilExpiry < 0) return 'red';
        if (daysUntilExpiry < 30) return 'yellow';
      }
      return 'green';
    }

    return 'yellow'; // PENDING
  }

  async submitClearance(studentProfileId: string, catalogItemId: string, evidenceUrl: string, expiryDate?: Date) {
    return this.prisma.studentClearanceItem.upsert({
      where: {
        studentProfileId_catalogItemId: {
          studentProfileId,
          catalogItemId,
        },
      },
      create: {
        studentProfileId,
        catalogItemId,
        evidenceUrl,
        expiryDate,
        status: 'PENDING',
        submittedAt: new Date(),
      },
      update: {
        evidenceUrl,
        expiryDate,
        status: 'PENDING',
        submittedAt: new Date(),
      },
    });
  }
}
