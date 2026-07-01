import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CrudService } from '../../core';
import { Transfer, TransferStatus } from './entities/transfer.entity';
import { Account } from '../accounts/entities/account.entity';

@Injectable()
export class TransfersService extends CrudService<Transfer> {
  constructor(
    @InjectRepository(Transfer)
    repository: Repository<Transfer>,
    private readonly dataSource: DataSource,
  ) {
    super(repository);
  }

  async findByReference(ref: string): Promise<Transfer | null> {
    return this.repository.findOne({ where: { referenceNumber: ref } });
  }

  async execute(id: string): Promise<Transfer> {
    const transfer = await this.findOne(id);
    if (transfer.status !== TransferStatus.PENDING) {
      throw new BadRequestException('Only pending transfers can be executed');
    }
    if (transfer.fromAccountId === transfer.toAccountId) {
      throw new BadRequestException('Cannot transfer to the same account');
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const fromAccount = await queryRunner.manager.findOne(Account, {
        where: { id: transfer.fromAccountId },
      });
      const toAccount = await queryRunner.manager.findOne(Account, {
        where: { id: transfer.toAccountId },
      });
      if (!fromAccount || !toAccount) {
        throw new BadRequestException('Account not found');
      }

      const amount = Number(transfer.amount);
      const fromBalance = Number(fromAccount.balance);
      if (fromBalance < amount) {
        throw new BadRequestException('Insufficient balance');
      }

      fromAccount.balance = fromBalance - amount;
      fromAccount.creditBalance = Number(fromAccount.creditBalance) + amount;
      toAccount.balance = Number(toAccount.balance) + amount;
      toAccount.debitBalance = Number(toAccount.debitBalance) + amount;

      await queryRunner.manager.save(fromAccount);
      await queryRunner.manager.save(toAccount);

      transfer.status = TransferStatus.COMPLETED;
      transfer.completedAt = new Date();
      await queryRunner.manager.save(transfer);

      await queryRunner.commitTransaction();
      return this.findOne(id);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async cancel(id: string): Promise<Transfer> {
    const transfer = await this.findOne(id);
    if (transfer.status !== TransferStatus.PENDING) {
      throw new BadRequestException('Only pending transfers can be cancelled');
    }
    transfer.status = TransferStatus.CANCELLED;
    await this.repository.save(transfer);
    return this.findOne(id);
  }
}
