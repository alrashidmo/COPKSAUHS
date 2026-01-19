import { z } from 'zod';

export const submitSurveySchema = z.object({
  surveyAssignmentId: z.string().cuid(),
  answers: z.array(
    z.object({
      questionId: z.string().cuid(),
      answerValue: z.any(),
    })
  ).min(1, 'At least one answer is required'),
});
