import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ClearanceService } from './clearance.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('clearance')
@Controller('clearance')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ClearanceController {
  constructor(private clearanceService: ClearanceService) {}

  @Get()
  @ApiOperation({ summary: 'Get all clearance items for current student' })
  async getClearanceItems(@Request() req) {
    return this.clearanceService.getClearanceItems(req.user.userId);
  }

  @Post('submit')
  @ApiOperation({ summary: 'Submit clearance evidence' })
  async submitClearance(
    @Request() req,
    @Body() dto: { catalogItemId: string; evidenceUrl: string; expiryDate?: Date }
  ) {
    return this.clearanceService.submitClearance(
      req.user.userId,
      dto.catalogItemId,
      dto.evidenceUrl,
      dto.expiryDate
    );
  }
}
