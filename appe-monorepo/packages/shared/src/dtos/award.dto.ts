export interface CreateAwardDto {
  title: string;
  awardingBody: string;
  level: string;
  category: string;
  dateReceived: Date;
  description?: string;
}

export interface UpdateAwardDto extends Partial<CreateAwardDto> {
  status?: string;
}

export interface AwardRecordDto {
  id: string;
  title: string;
  awardingBody: string;
  level: string;
  category: string;
  dateReceived: Date;
  description?: string;
  status: string;
  submittedAt?: Date;
  approvedAt?: Date;
  rejectionReason?: string;
  certificateUrl?: string;
  createdAt: Date;
}
