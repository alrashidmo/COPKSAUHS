export interface RotationDto {
  id: string;
  name: string;
  rotationType: string;
  blockNumber: number;
  startDate: Date;
  endDate: Date;
  requiredHours: number;
  description?: string;
}
