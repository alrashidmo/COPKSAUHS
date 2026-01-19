export interface ClearanceItemDto {
  id: string;
  name: string;
  type: string;
  description?: string;
  isRequired: boolean;
  validityDays?: number;
  status: string;
  evidenceUrl?: string;
  submittedAt?: Date;
  approvedAt?: Date;
  expiryDate?: Date;
  rejectionReason?: string;
  trafficLight: 'green' | 'yellow' | 'red';
}

export interface SubmitClearanceDto {
  catalogItemId: string;
  evidenceUrl: string;
  expiryDate?: Date;
}
