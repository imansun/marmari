import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { AccountGroup } from './entities/account-group.entity';

@Injectable()
export class AccountGroupsService extends CrudService<AccountGroup> {
  constructor(
    @InjectRepository(AccountGroup)
    repository: Repository<AccountGroup>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<AccountGroup | null> {
    return this.repository.findOne({ where: { code } });
  }

  async getTree(): Promise<AccountGroup[]> {
    return this.repository.find({ relations: { children: true } });
  }

  async getChildren(id: string): Promise<AccountGroup[]> {
    return this.repository.find({ where: { parentId: id } });
  }
}
