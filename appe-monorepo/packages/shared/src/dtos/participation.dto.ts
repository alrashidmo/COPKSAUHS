export interface CreateParticipationDto {
  title: string;
  type: string;
  level: string;
  organizer?: string;
  eventDate: Date;
  role?: string;
  hours?: number;
  description?: string;
}

export interface UpdateParticipationDto extends Partial<CreateParticipationDto> {
  status?: string;
}

export interface ParticipationRecordDto {
  id: string;
  title: string;
  type: string;
  level: string;
  organizer?: string;
  eventDate: Date;
  role?: string;
  hours?: number;
  description?: string;
  status: string;
  submittedAt?: Date;
  approvedAt?: Date;
  rejectionReason?: string;
  evidenceUrl?: string;
  createdAt: Date;
}
