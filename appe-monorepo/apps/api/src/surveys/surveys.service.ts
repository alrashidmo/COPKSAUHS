import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { SurveyAssignmentDto, SurveyDetailDto, SubmitSurveyDto } from '@appe/shared';

@Injectable()
export class SurveysService {
  constructor(private prisma: PrismaService) {}

  async getAssignedSurveys(studentProfileId: string): Promise<SurveyAssignmentDto[]> {
    const assignments = await this.prisma.surveyAssignment.findMany({
      where: {
        OR: [
          { studentProfileId },
          { studentProfileId: null }, // Group assignments
        ],
      },
      include: {
        surveyTemplate: true,
        responses: {
          where: { studentProfileId },
        },
      },
    });

    return assignments.map((assignment) => {
      const response = assignment.responses[0];
      return {
        id: assignment.id,
        surveyTitle: assignment.surveyTemplate.title,
        surveyDescription: assignment.surveyTemplate.description,
        surveyType: assignment.surveyTemplate.surveyType,
        isAnonymous: assignment.surveyTemplate.isAnonymous,
        dueDate: assignment.dueDate,
        status: response
          ? response.isComplete
            ? 'submitted'
            : 'in-progress'
          : 'not-started',
        submittedAt: response?.submittedAt,
      };
    });
  }

  async getSurveyDetail(assignmentId: string): Promise<SurveyDetailDto> {
    const assignment = await this.prisma.surveyAssignment.findUnique({
      where: { id: assignmentId },
      include: {
        surveyTemplate: {
          include: {
            questions: {
              orderBy: { order: 'asc' },
            },
          },
        },
      },
    });

    return {
      id: assignment.surveyTemplate.id,
      title: assignment.surveyTemplate.title,
      description: assignment.surveyTemplate.description,
      isAnonymous: assignment.surveyTemplate.isAnonymous,
      questions: assignment.surveyTemplate.questions.map((q) => ({
        id: q.id,
        questionText: q.questionText,
        arabicText: q.arabicText,
        questionType: q.questionType,
        isRequired: q.isRequired,
        options: q.options,
      })),
    };
  }

  async submitSurvey(studentProfileId: string, dto: SubmitSurveyDto) {
    // Create or update response
    const response = await this.prisma.surveyResponse.upsert({
      where: {
        surveyAssignmentId_studentProfileId: {
          surveyAssignmentId: dto.surveyAssignmentId,
          studentProfileId,
        },
      },
      create: {
        surveyAssignmentId: dto.surveyAssignmentId,
        studentProfileId,
        isComplete: true,
        submittedAt: new Date(),
      },
      update: {
        isComplete: true,
        submittedAt: new Date(),
      },
    });

    // Create answers
    await Promise.all(
      dto.answers.map((answer) =>
        this.prisma.surveyAnswer.upsert({
          where: {
            surveyResponseId_questionId: {
              surveyResponseId: response.id,
              questionId: answer.questionId,
            },
          },
          create: {
            surveyResponseId: response.id,
            questionId: answer.questionId,
            answerValue: answer.answerValue,
          },
          update: {
            answerValue: answer.answerValue,
          },
        })
      )
    );

    return { success: true, responseId: response.id };
  }
}
