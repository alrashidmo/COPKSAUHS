import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AwardsService } from './awards.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import type { CreateAwardDto } from '@appe/shared';

@ApiTags('awards')
@Controller('awards')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AwardsController {
  constructor(private awardsService: AwardsService) {}

  @Post()
  @ApiOperation({ summary: 'Create award record' })
  async create(@Request() req, @Body() dto: CreateAwardDto) {
    return this.awardsService.create(req.user.userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all award records' })
  async findAll(@Request() req) {
    return this.awardsService.findAll(req.user.userId);
  }

  @Patch(':id/submit')
  @ApiOperation({ summary: 'Submit award record for approval' })
  async submit(@Request() req, @Param('id') id: string) {
    return this.awardsService.submit(id, req.user.userId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete award record' })
  async delete(@Request() req, @Param('id') id: string) {
    return this.awardsService.delete(id, req.user.userId);
  }
}
