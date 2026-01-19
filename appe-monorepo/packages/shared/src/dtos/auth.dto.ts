export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}

export interface RefreshTokenDto {
  refreshToken: string;
}

export interface UserProfileDto {
  id: string;
  email: string;
  role: string;
  isActive: boolean;
  studentProfile?: {
    id: string;
    studentId: string;
    firstName: string;
    lastName: string;
    campus: string;
    program: string;
    gpa: number | null;
  };
}
