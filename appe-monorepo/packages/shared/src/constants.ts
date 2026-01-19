export const API_VERSION = 'v1';
export const API_PREFIX = `/api/${API_VERSION}`;

export const PHRD_INDICATORS = {
  STUDENT_SATISFACTION_SERVICES: 'PHRD 4.1',
  STUDENT_SATISFACTION_CLINICAL: 'PHRD 4.2',
  CONFERENCE_PROJECT_ACCEPTANCE: 'PHRD 4.4',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

export const FILE_UPLOAD = {
  MAX_SIZE_MB: 10,
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'application/pdf'],
} as const;

export const CLEARANCE_TRAFFIC_LIGHTS = {
  GREEN: 'Approved and valid',
  YELLOW: 'Expiring soon or pending',
  RED: 'Expired, rejected, or not submitted',
} as const;
