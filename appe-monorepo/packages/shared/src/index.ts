// Re-export database types
export type {
  User,
  StudentProfile,
  Course,
  Rotation,
  Site,
  Preceptor,
  RotationAssignment,
  SurveyTemplate,
  SurveyQuestion,
  SurveyAssignment,
  SurveyResponse,
  SurveyAnswer,
  ParticipationRecord,
  AwardRecord,
  ClearanceCatalogItem,
  StudentClearanceItem,
  Evaluation,
  AttendanceRequest,
  TrainingLog,
  FileUpload,
  AuditLog,
} from '@appe/db';

export {
  UserRole,
  Campus,
  Program,
  RotationType,
  Status,
  ParticipationType,
  ParticipationLevel,
  AwardCategory,
  ClearanceType,
  ClearanceStatus,
  SurveyType,
  QuestionType,
} from '@appe/db';

// DTOs
export * from './dtos/auth.dto';
export * from './dtos/student.dto';
export * from './dtos/survey.dto';
export * from './dtos/participation.dto';
export * from './dtos/award.dto';
export * from './dtos/clearance.dto';
export * from './dtos/rotation.dto';

// Validators
export * from './validators/auth.validator';
export * from './validators/student.validator';
export * from './validators/survey.validator';

// Constants
export * from './constants';
