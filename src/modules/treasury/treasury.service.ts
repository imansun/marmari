import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CrudService } from '../../core';
import { Treasury } from './entities/treasury.entity';
import {
  TreasuryTransaction,
  TransactionType,
} from './entities/treasury-transaction.entity';

@Injectable()
export class TreasuryService extends CrudService<Treasury> {
  constructor(
    @InjectRepository(Treasury)
    repository: Repository<Treasury>,
    @InjectRepository(TreasuryTransaction)
    private readonly txRepository: Repository<TreasuryTransaction>,
    private readonly dataSource: DataSource,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<Treasury | null> {
    return this.repository.findOne({ where: { code } });
  }

  async getBalance(id: string): Promise<{ balance: number }> {
    const treasury = await this.findOne(id);
    return { balance: Number(treasury.balance) };
  }

  async deposit(dto: {
    treasuryId: string;
    amount: number;
    date: Date;
    description?: string;
    referenceNumber?: string;
    partyId?: string;
    relatedEntityType?: string;
    relatedEntityId?: string;
  }): Promise<TreasuryTransaction> {
    const treasury = await this.findOne(dto.treasuryId);

    return this.dataSource.transaction(async (em) => {
      const balanceBefore = Number(treasury.balance);
      const balanceAfter = balanceBefore + dto.amount;

      await em.update(Treasury, dto.treasuryId, { balance: balanceAfter });

      return em.save(
        this.txRepository.create({
          treasuryId: dto.treasuryId,
          transactionType: TransactionType.DEPOSIT,
          amount: dto.amount,
          balanceBefore,
          balanceAfter,
          date: dto.date,
          description: dto.description,
          referenceNumber: dto.referenceNumber,
          partyId: dto.partyId,
          relatedEntityType: dto.relatedEntityType,
          relatedEntityId: dto.relatedEntityId,
        }),
      );
    });
  }

  async withdraw(dto: {
    treasuryId: string;
    amount: number;
    date: Date;
    description?: string;
    referenceNumber?: string;
    partyId?: string;
  }): Promise<TreasuryTransaction> {
    const treasury = await this.findOne(dto.treasuryId);
    const currentBalance = Number(treasury.balance);

    if (currentBalance < dto.amount) {
      throw new BadRequestException('Insufficient balance');
    }

    return this.dataSource.transaction(async (em) => {
      const balanceBefore = currentBalance;
      const balanceAfter = balanceBefore - dto.amount;

      await em.update(Treasury, dto.treasuryId, { balance: balanceAfter });

      return em.save(
        this.txRepository.create({
          treasuryId: dto.treasuryId,
          transactionType: TransactionType.WITHDRAWAL,
          amount: dto.amount,
          balanceBefore,
          balanceAfter,
          date: dto.date,
          description: dto.description,
          referenceNumber: dto.referenceNumber,
          partyId: dto.partyId,
        }),
      );
    });
  }

  async transfer(dto: {
    fromTreasuryId: string;
    toTreasuryId: string;
    amount: number;
    date: Date;
    description?: string;
    referenceNumber?: string;
  }): Promise<{ from: TreasuryTransaction; to: TreasuryTransaction }> {
    if (dto.fromTreasuryId === dto.toTreasuryId) {
      throw new BadRequestException('Cannot transfer to the same treasury');
    }

    const fromTreasury = await this.findOne(dto.fromTreasuryId);
    const toTreasury = await this.findOne(dto.toTreasuryId);
    const fromBalance = Number(fromTreasury.balance);

    if (fromBalance < dto.amount) {
      throw new BadRequestException('Insufficient balance');
    }

    return this.dataSource.transaction(async (em) => {
      const fromBefore = fromBalance;
      const fromAfter = fromBefore - dto.amount;
      const toBefore = Number(toTreasury.balance);
      const toAfter = toBefore + dto.amount;

      await em.update(Treasury, dto.fromTreasuryId, { balance: fromAfter });
      await em.update(Treasury, dto.toTreasuryId, { balance: toAfter });

      const fromTx = await em.save(
        this.txRepository.create({
          treasuryId: dto.fromTreasuryId,
          transactionType: TransactionType.TRANSFER_OUT,
          amount: dto.amount,
          balanceBefore: fromBefore,
          balanceAfter: fromAfter,
          date: dto.date,
          description: dto.description ?? 'Transfer out',
          referenceNumber: dto.referenceNumber,
        }),
      );

      const toTx = await em.save(
        this.txRepository.create({
          treasuryId: dto.toTreasuryId,
          transactionType: TransactionType.TRANSFER_IN,
          amount: dto.amount,
          balanceBefore: toBefore,
          balanceAfter: toAfter,
          date: dto.date,
          description: dto.description ?? 'Transfer in',
          referenceNumber: dto.referenceNumber,
        }),
      );

      return { from: fromTx, to: toTx };
    });
  }

  async getTransactions(
    treasuryId: string,
    page = 1,
    limit = 50,
  ): Promise<{ data: TreasuryTransaction[]; meta: any }> {
    const [data, total] = await this.txRepository.findAndCount({
      where: { treasuryId },
      order: { date: 'DESC', createdAt: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });
    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }
}
