import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
