import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { Party, PartyRole } from './entities/party.entity';

@Injectable()
export class PartiesService extends CrudService<Party> {
  constructor(
    @InjectRepository(Party)
    repository: Repository<Party>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<Party | null> {
    return this.repository.findOne({ where: { code } });
  }

  async getCustomers() {
    return this.repository.find({ where: { role: PartyRole.CUSTOMER } });
  }

  async getSuppliers() {
    return this.repository.find({ where: { role: PartyRole.SUPPLIER } });
  }
}
