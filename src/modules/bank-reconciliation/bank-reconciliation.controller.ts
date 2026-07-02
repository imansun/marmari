import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseEnumPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { BankReconciliationService } from './bank-reconciliation.service';
import {
  CreateBankReconciliationDto,
  UpdateBankReconciliationDto,
  ConfirmReconciliationDto,
} from './dto/create-bank-reconciliation.dto';
import { ReconciliationStatus } from './entities/bank-reconciliation.entity';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Bank Reconciliation')
@ApiBearerAuth()
@Controller('bank-reconciliation')
export class BankReconciliationController {
  constructor(
    private readonly bankReconciliationService: BankReconciliationService,
  ) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a bank reconciliation' })
  create(@Body() dto: CreateBankReconciliationDto) {
    const difference = dto.statementBalance - dto.bookBalance;
    return this.bankReconciliationService.create({ ...dto, difference });
  }

  @Get()
  @ApiOperation({ summary: 'Get all bank reconciliations' })
  findAll() {
    return this.bankReconciliationService.findAll();
  }

  @Get('by-bank-account/:bankAccountId')
  @ApiOperation({ summary: 'Get reconciliations by bank account' })
  findByBankAccount(@Param('bankAccountId') bankAccountId: string) {
    return this.bankReconciliationService.findByBankAccount(bankAccountId);
  }

  @Get('by-status/:status')
  @ApiOperation({ summary: 'Get reconciliations by status' })
  findByStatus(
    @Param('status', new ParseEnumPipe(ReconciliationStatus)) status: ReconciliationStatus,
  ) {
    return this.bankReconciliationService.findByStatus(status);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get bank reconciliation by ID' })
  findOne(@Param('id') id: string) {
    return this.bankReconciliationService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update bank reconciliation' })
  update(@Param('id') id: string, @Body() dto: UpdateBankReconciliationDto) {
    return this.bankReconciliationService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete bank reconciliation' })
  remove(@Param('id') id: string) {
    return this.bankReconciliationService.softDelete(id);
  }

  @Post(':id/complete')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Complete a reconciliation' })
  complete(@Param('id') id: string) {
    return this.bankReconciliationService.complete(id);
  }

  @Post(':id/confirm')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Confirm a reconciliation' })
  confirm(@Param('id') id: string, @Body() dto: ConfirmReconciliationDto) {
    return this.bankReconciliationService.confirm(id);
  }
}
