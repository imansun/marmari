import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SmsIntegrationService {
  private readonly logger = new Logger(SmsIntegrationService.name);

  constructor(private readonly config: ConfigService) {}

  send(to: string, message: string): boolean {
    this.logger.log(`SMS to ${to}: ${message.substring(0, 50)}...`);
    return true;
  }

  sendBulk(recipients: string[], message: string): number {
    let sent = 0;
    for (const to of recipients) {
      if (this.send(to, message)) sent++;
    }
    return sent;
  }
}
