import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { BankReconciliation, ReconciliationStatus } from './entities/bank-reconciliation.entity';

@Injectable()
export class BankReconciliationService extends CrudService<BankReconciliation> {
  constructor(
    @InjectRepository(BankReconciliation)
    repository: Repository<BankReconciliation>,
  ) {
    super(repository);
  }

  async findByBankAccount(bankAccountId: string): Promise<BankReconciliation[]> {
    return this.repository.find({ where: { bankAccountId } });
  }

  async findByStatus(status: ReconciliationStatus): Promise<BankReconciliation[]> {
    return this.repository.find({ where: { status } });
  }

  async confirm(id: string): Promise<BankReconciliation> {
    const reconciliation = await this.findOne(id);
    if (reconciliation.status !== ReconciliationStatus.COMPLETED) {
      throw new BadRequestException('Reconciliation must be completed before confirming');
    }
    await this.repository.update(id, {
      status: ReconciliationStatus.CONFIRMED,
      reconciledAt: new Date(),
    });
    return this.findOne(id);
  }

  async complete(id: string): Promise<BankReconciliation> {
    const reconciliation = await this.findOne(id);
    if (reconciliation.status !== ReconciliationStatus.DRAFT) {
      throw new BadRequestException('Only draft reconciliations can be completed');
    }
    await this.repository.update(id, { status: ReconciliationStatus.COMPLETED });
    return this.findOne(id);
  }
}
