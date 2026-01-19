import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { SurveysService } from './surveys.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import type { SubmitSurveyDto } from '@appe/shared';

@ApiTags('surveys')
@Controller('surveys')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class SurveysController {
  constructor(private surveysService: SurveysService) {}

  @Get('assigned')
  @ApiOperation({ summary: 'Get assigned surveys for current student' })
  async getAssignedSurveys(@Request() req) {
    const studentProfileId = req.user.userId; // Simplified
    return this.surveysService.getAssignedSurveys(studentProfileId);
  }

  @Get(':assignmentId')
  @ApiOperation({ summary: 'Get survey detail' })
  async getSurveyDetail(@Param('assignmentId') assignmentId: string) {
    return this.surveysService.getSurveyDetail(assignmentId);
  }

  @Post('submit')
  @ApiOperation({ summary: 'Submit survey response' })
  async submitSurvey(@Request() req, @Body() dto: SubmitSurveyDto) {
    const studentProfileId = req.user.userId; // Simplified
    return this.surveysService.submitSurvey(studentProfileId, dto);
  }
}
