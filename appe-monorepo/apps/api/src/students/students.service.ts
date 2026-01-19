import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { StudentDashboardDto, TrainingOverviewDto } from '@appe/shared';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async getDashboard(studentProfileId: string): Promise<StudentDashboardDto> {
    const profile = await this.prisma.studentProfile.findUnique({
      where: { id: studentProfileId },
      include: {
        rotationAssignments: {
          include: {
            siteRotation: {
              include: {
                site: true,
                rotation: true,
              },
            },
            preceptor: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    const activeRotation = profile.rotationAssignments.find((r) => r.status === 'ACTIVE');
    const completedRotations = profile.rotationAssignments.filter((r) => r.status === 'COMPLETED');

    return {
      stats: {
        gpa: profile.gpa || 0,
        attendance: 100, // Calculate from attendance records
        completedRotations: completedRotations.length,
      },
      currentRotation: activeRotation
        ? {
            id: activeRotation.id,
            name: activeRotation.siteRotation.rotation.name,
            siteName: activeRotation.siteRotation.site.name,
            preceptorName: activeRotation.preceptor
              ? `${activeRotation.preceptor.firstName} ${activeRotation.preceptor.lastName}`
              : 'TBD',
            startDate: activeRotation.siteRotation.rotation.startDate,
            endDate: activeRotation.siteRotation.rotation.endDate,
            status: activeRotation.status,
            matchScore: activeRotation.matchScore,
          }
        : undefined,
      upcomingRotations: profile.rotationAssignments
        .filter((r) => r.status === 'PENDING')
        .map((r) => ({
          id: r.id,
          name: r.siteRotation.rotation.name,
          startDate: r.siteRotation.rotation.startDate,
        })),
    };
  }

  async getTrainingOverview(studentProfileId: string): Promise<TrainingOverviewDto> {
    const profile = await this.prisma.studentProfile.findUnique({
      where: { id: studentProfileId },
      include: {
        rotationAssignments: {
          include: {
            siteRotation: {
              include: {
                site: true,
                rotation: true,
              },
            },
            preceptor: true,
          },
        },
      },
    });

    const allRotations = profile.rotationAssignments.map((assignment) => ({
      id: assignment.id,
      rotationName: assignment.siteRotation.rotation.name,
      rotationType: assignment.siteRotation.rotation.rotationType,
      siteName: assignment.siteRotation.site.name,
      siteAddress: assignment.siteRotation.site.address || '',
      preceptor: assignment.preceptor
        ? {
            name: `${assignment.preceptor.firstName} ${assignment.preceptor.lastName}`,
            title: assignment.preceptor.title,
            phone: assignment.preceptor.phone,
            email: assignment.preceptor.email,
          }
        : {
            name: 'TBD',
            title: '',
          },
      startDate: assignment.siteRotation.rotation.startDate,
      endDate: assignment.siteRotation.rotation.endDate,
      requiredHours: assignment.siteRotation.rotation.requiredHours,
      completedHours: assignment.hoursCompleted,
      status: assignment.status,
      matchScore: assignment.matchScore,
    }));

    return {
      program: profile.program,
      totalRotations: allRotations.length,
      completedRotations: allRotations.filter((r) => r.status === 'COMPLETED').length,
      currentRotation: allRotations.find((r) => r.status === 'ACTIVE'),
      allRotations,
    };
  }
}
