import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CrudService } from '../../core';
import { Account } from './entities/account.entity';
import { AccountType } from './entities/account-type.entity';

@Injectable()
export class AccountsService extends CrudService<Account> {
  constructor(
    @InjectRepository(Account)
    repository: Repository<Account>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<Account | null> {
    return this.repository.findOne({ where: { code } });
  }

  async getBalance(
    id: string,
  ): Promise<{ debit: number; credit: number; balance: number }> {
    const account = await this.findOne(id);
    return {
      debit: Number(account.debitBalance),
      credit: Number(account.creditBalance),
      balance: Number(account.balance),
    };
  }

  async getChildren(parentCode: string): Promise<Account[]> {
    return this.repository.find({
      where: { code: Like(`${parentCode}%`) },
      order: { code: 'ASC' },
      relations: { accountType: true },
    });
  }

  async getTree(): Promise<Record<string, unknown>[]> {
    const all = await this.repository.find({
      order: { code: 'ASC' },
      relations: { accountType: true },
    });

    const buildTree = (parentCode: string): Record<string, unknown>[] => {
      return all
        .filter((a) => {
          if (parentCode === '') return a.code.length <= 1;
          return (
            a.code.startsWith(parentCode) &&
            a.code.length === parentCode.length + 1
          );
        })
        .map((a) => ({
          id: a.id,
          code: a.code,
          name: a.name,
          balance: a.balance,
          status: a.status,
          category: a.accountType?.categoryType,
          children: buildTree(a.code),
        }));
    };

    return buildTree('');
  }

  async getCategoryBalances(): Promise<
    Record<string, { count: number; totalBalance: number }>
  > {
    const all = await this.repository.find({
      relations: { accountType: true },
    });
    const result: Record<string, { count: number; totalBalance: number }> = {};

    for (const account of all) {
      const cat = account.accountType?.categoryType || 'unknown';
      if (!result[cat]) result[cat] = { count: 0, totalBalance: 0 };
      result[cat].count++;
      result[cat].totalBalance += Number(account.balance || 0);
    }

    return result;
  }
}

@Injectable()
export class AccountTypesService extends CrudService<AccountType> {
  constructor(
    @InjectRepository(AccountType)
    repository: Repository<AccountType>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<AccountType | null> {
    return this.repository.findOne({ where: { code } });
  }
}
