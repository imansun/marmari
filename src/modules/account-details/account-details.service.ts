import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { AccountDetail, AccountDetailType } from './entities/account-detail.entity';

@Injectable()
export class AccountDetailsService extends CrudService<AccountDetail> {
  constructor(
    @InjectRepository(AccountDetail)
    repository: Repository<AccountDetail>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<AccountDetail | null> {
    return this.repository.findOne({ where: { code } });
  }

  async findByAccount(accountId: string): Promise<AccountDetail[]> {
    return this.repository.find({ where: { accountId } });
  }

  async findByType(detailType: AccountDetailType): Promise<AccountDetail[]> {
    return this.repository.find({ where: { detailType } });
  }
}
