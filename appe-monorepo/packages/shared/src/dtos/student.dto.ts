export interface StudentDashboardDto {
  stats: {
    gpa: number;
    attendance: number;
    completedRotations: number;
  };
  currentRotation?: {
    id: string;
    name: string;
    siteName: string;
    preceptorName: string;
    startDate: Date;
    endDate: Date;
    status: string;
    matchScore?: number;
  };
  upcomingRotations: Array<{
    id: string;
    name: string;
    startDate: Date;
  }>;
}

export interface StudentRotationDto {
  id: string;
  rotationName: string;
  rotationType: string;
  siteName: string;
  siteAddress: string;
  preceptor: {
    name: string;
    title: string;
    phone?: string;
    email?: string;
  };
  startDate: Date;
  endDate: Date;
  requiredHours: number;
  completedHours: number;
  status: string;
  matchScore?: number;
}

export interface TrainingOverviewDto {
  program: string;
  totalRotations: number;
  completedRotations: number;
  currentRotation?: StudentRotationDto;
  allRotations: StudentRotationDto[];
}
