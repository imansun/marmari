import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { Bank } from './entities/bank.entity';
import { BankAccount } from './entities/bank-account.entity';

@Injectable()
export class BanksService extends CrudService<Bank> {
  constructor(
    @InjectRepository(Bank)
    repository: Repository<Bank>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<Bank | null> {
    return this.repository.findOne({ where: { code } });
  }
}

@Injectable()
export class BankAccountsService extends CrudService<BankAccount> {
  constructor(
    @InjectRepository(BankAccount)
    repository: Repository<BankAccount>,
  ) {
    super(repository);
  }

  async findByAccountNumber(accNumber: string): Promise<BankAccount | null> {
    return this.repository.findOne({ where: { accountNumber: accNumber } });
  }
}
