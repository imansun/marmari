import { Controller, Get, Post, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JobsService } from './jobs.service';
import { Roles } from '../../common';

@ApiTags('Jobs')
@ApiBearerAuth()
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get('queue/info')
  @Roles('admin')
  @ApiOperation({ summary: 'Get queue info' })
  async getQueueInfo() {
    return { queued: await this.jobsService.getQueued() };
  }

  @Get(':id/status')
  @Roles('admin')
  @ApiOperation({ summary: 'Get job status' })
  getStatus(@Param('id') id: string) {
    return this.jobsService.getJobStatus(id);
  }

  @Post('clean')
  @Roles('admin')
  @ApiOperation({ summary: 'Clean completed/failed jobs' })
  clean() {
    return this.jobsService.clean();
  }
}
