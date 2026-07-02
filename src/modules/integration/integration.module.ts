import { Module } from '@nestjs/common';
import { IntegrationController } from './integration.controller';
import { TaxIntegrationService } from './tax-integration.service';
import { BankIntegrationService } from './bank-integration.service';
import { SmsIntegrationService } from './sms-integration.service';

@Module({
  controllers: [IntegrationController],
  providers: [
    TaxIntegrationService,
    BankIntegrationService,
    SmsIntegrationService,
  ],
  exports: [
    TaxIntegrationService,
    BankIntegrationService,
    SmsIntegrationService,
  ],
})
export class IntegrationModule {}
