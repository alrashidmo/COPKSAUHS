export interface SurveyAssignmentDto {
  id: string;
  surveyTitle: string;
  surveyDescription?: string;
  surveyType: string;
  isAnonymous: boolean;
  dueDate?: Date;
  status: 'not-started' | 'in-progress' | 'submitted';
  submittedAt?: Date;
}

export interface SurveyQuestionDto {
  id: string;
  questionText: string;
  arabicText?: string;
  questionType: string;
  isRequired: boolean;
  options?: any;
}

export interface SurveyDetailDto {
  id: string;
  title: string;
  description?: string;
  isAnonymous: boolean;
  questions: SurveyQuestionDto[];
}

export interface SubmitSurveyDto {
  surveyAssignmentId: string;
  answers: Array<{
    questionId: string;
    answerValue: any;
  }>;
}

export interface SurveyResponseDto {
  id: string;
  surveyAssignmentId: string;
  isComplete: boolean;
  submittedAt?: Date;
}
