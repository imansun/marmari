import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Jobs')
@ApiBearerAuth()
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Create a new job' })
  async create(@Body() dto: CreateJobDto) {
    const id = await this.jobsService.add(
      { type: dto.type as any, data: dto.data },
      dto.delay,
    );
    return { id };
  }

  @Get('queue/info')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Get queue info' })
  async getQueueInfo() {
    return { queued: await this.jobsService.getQueued() };
  }

  @Get(':id/status')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Get job status' })
  getStatus(@Param('id') id: string) {
    return this.jobsService.getJobStatus(id);
  }

  @Post('clean')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Clean completed/failed jobs' })
  clean() {
    return this.jobsService.clean();
  }
}
