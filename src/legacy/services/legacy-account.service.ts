import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LegacyAccount, LegacyAccountType } from '../entities';

@Injectable()
export class LegacyAccountService {
  constructor(
    @InjectRepository(LegacyAccount)
    private readonly accountRepo: Repository<LegacyAccount>,
    @InjectRepository(LegacyAccountType)
    private readonly accountTypeRepo: Repository<LegacyAccountType>,
  ) {}

  async findAll(page = 1, limit = 20) {
    const [data, total] = await this.accountRepo.findAndCount({
      order: { accountID: 'ASC' },
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total, page, limit };
  }

  async findOne(id: number) {
    return this.accountRepo.findOneBy({ accountID: id });
  }

  async findByCode(code: string) {
    return this.accountRepo.findOneBy({ number: code });
  }

  async findAccountTypes() {
    return this.accountTypeRepo.find({ order: { accountTypeID: 'ASC' } });
  }

  async findAccountType(id: number) {
    return this.accountTypeRepo.findOneBy({ accountTypeID: id });
  }
}
