import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import type { Queue } from 'bull';
import { CacheService } from '../../cache';

export interface JobPayload {
  type:
    | 'send_email'
    | 'export_report'
    | 'process_webhook'
    | 'index_document'
    | 'cleanup_temp'
    | 'notify';
  data: Record<string, unknown>;
}

@Injectable()
export class JobsService {
  constructor(
    @InjectQueue('default') private readonly defaultQueue: Queue,
    private readonly cache: CacheService,
  ) {}

  async add(payload: JobPayload, delay?: number): Promise<string> {
    const job = await this.defaultQueue.add(payload, {
      delay: delay ?? 0,
      attempts: 3,
      backoff: { type: 'exponential', delay: 2000 },
    });
    return job.id?.toString() ?? '';
  }

  async addBulk(jobs: JobPayload[]): Promise<void> {
    await this.defaultQueue.addBulk(jobs.map((data) => ({ data })));
  }

  async getJobStatus(jobId: string) {
    const job = await this.defaultQueue.getJob(jobId);
    if (!job) return null;
    const state: string = await job.getState();
    const pct: number = await (job.progress() as Promise<number>);
    return {
      id: job.id,
      state,
      progress: pct,
      data: job.data as Record<string, unknown>,
      failedReason: job.failedReason,
    };
  }

  async getQueued(): Promise<number> {
    return this.defaultQueue.getWaitingCount();
  }

  async clean(): Promise<void> {
    await this.defaultQueue.clean(0, 'completed');
    await this.defaultQueue.clean(0, 'failed');
  }
}
