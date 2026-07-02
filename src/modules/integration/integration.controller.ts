import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { TaxIntegrationService } from './tax-integration.service';
import { BankIntegrationService } from './bank-integration.service';
import { SmsIntegrationService } from './sms-integration.service';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Integration')
@ApiBearerAuth()
@Controller('integration')
export class IntegrationController {
  constructor(
    private readonly taxIntegration: TaxIntegrationService,
    private readonly bankIntegration: BankIntegrationService,
    private readonly smsIntegration: SmsIntegrationService,
  ) {}

  @Post('tax/inquiry')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Tax inquiry' })
  taxInquiry(@Body() dto: { nationalId: string; period: string }) {
    return this.taxIntegration.inquiry(dto.nationalId, dto.period);
  }

  @Post('tax/submit-return')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Submit tax return' })
  submitTaxReturn(@Body() dto: Record<string, unknown>) {
    return this.taxIntegration.submitReturn(dto);
  }

  @Post('bank/verify-account')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Verify bank account' })
  verifyAccount(@Body() dto: { accountNumber: string; bankCode: string }) {
    return this.bankIntegration.verifyAccount(dto.accountNumber, dto.bankCode);
  }

  @Post('bank/transfer')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Execute bank transfer' })
  transfer(@Body() dto: { fromAccount: string; toAccount: string; amount: number; description?: string }) {
    return this.bankIntegration.transfer(dto);
  }

  @Get('bank/reconcile/:date')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Bank reconciliation' })
  reconcile(@Param('date') date: string) {
    return this.bankIntegration.reconcile(date);
  }

  @Post('sms/send')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Send SMS' })
  sendSms(@Body() dto: { to: string; message: string }) {
    return this.smsIntegration.send(dto.to, dto.message);
  }
}
