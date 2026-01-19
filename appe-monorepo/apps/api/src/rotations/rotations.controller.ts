import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { RotationsService } from './rotations.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('rotations')
@Controller('rotations')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class RotationsController {
  constructor(private rotationsService: RotationsService) {}

  @Get('available')
  @ApiOperation({ summary: 'Get all available rotations' })
  async getAvailableRotations() {
    return this.rotationsService.getAvailableRotations();
  }
}
