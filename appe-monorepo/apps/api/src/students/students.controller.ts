import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { StudentsService } from './students.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('students')
@Controller('students')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get student dashboard data' })
  async getDashboard(@Request() req) {
    // Extract studentProfileId from user (assumes it's available from JWT)
    const user = await this.getStudentProfileId(req.user.userId);
    return this.studentsService.getDashboard(user.studentProfileId);
  }

  @Get('training/overview')
  @ApiOperation({ summary: 'Get training overview' })
  async getTrainingOverview(@Request() req) {
    const user = await this.getStudentProfileId(req.user.userId);
    return this.studentsService.getTrainingOverview(user.studentProfileId);
  }

  private async getStudentProfileId(userId: string) {
    // Helper to get student profile ID from user
    // In production, consider caching this or including in JWT
    return { studentProfileId: userId }; // Simplified
  }
}
