import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import type { Job } from 'bull';

@Processor('default')
export class JobsProcessor {
  private readonly logger = new Logger(JobsProcessor.name);

  @Process()
  handle(job: Job): void {
    const { type, data } = job.data as {
      type: string;
      data: Record<string, unknown>;
    };
    this.logger.log(`Processing job ${job.id}: ${type}`);

    switch (type) {
      case 'send_email':
        this.sendEmail(data);
        break;
      case 'export_report':
        this.exportReport(data);
        break;
      case 'process_webhook':
        this.processWebhook(data);
        break;
      case 'index_document':
        this.indexDocument(data);
        break;
      case 'cleanup_temp':
        this.cleanupTemp();
        break;
      case 'notify':
        this.logger.log(`Notification: ${JSON.stringify(data)}`);
        break;
      default:
        this.logger.warn(`Unknown job type: ${type}`);
    }
  }

  private sendEmail(data: Record<string, unknown>): void {
    this.logger.log(
      `Sending email to ${String(data.to)}: ${String(data.subject)}`,
    );
  }

  private exportReport(data: Record<string, unknown>): void {
    this.logger.log(
      `Exporting report ${String(data.reportId)} to ${String(data.format)}`,
    );
  }

  private processWebhook(data: Record<string, unknown>): void {
    this.logger.log(`Processing webhook: ${String(data.event)}`);
  }

  private indexDocument(data: Record<string, unknown>): void {
    this.logger.log(
      `Indexing document: ${String(data.entityType)}/${String(data.entityId)}`,
    );
  }

  private cleanupTemp(): void {
    this.logger.log('Cleaning up temporary files');
  }
}
