import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ParticipationService } from './participation.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import type { CreateParticipationDto } from '@appe/shared';

@ApiTags('participation')
@Controller('participation')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ParticipationController {
  constructor(private participationService: ParticipationService) {}

  @Post()
  @ApiOperation({ summary: 'Create participation record' })
  async create(@Request() req, @Body() dto: CreateParticipationDto) {
    return this.participationService.create(req.user.userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all participation records' })
  async findAll(@Request() req) {
    return this.participationService.findAll(req.user.userId);
  }

  @Patch(':id/submit')
  @ApiOperation({ summary: 'Submit participation record for approval' })
  async submit(@Request() req, @Param('id') id: string) {
    return this.participationService.submit(id, req.user.userId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete participation record' })
  async delete(@Request() req, @Param('id') id: string) {
    return this.participationService.delete(id, req.user.userId);
  }
}
