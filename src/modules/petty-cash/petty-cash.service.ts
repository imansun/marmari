import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { PettyCash } from './entities/petty-cash.entity';

@Injectable()
export class PettyCashService extends CrudService<PettyCash> {
  constructor(
    @InjectRepository(PettyCash)
    repository: Repository<PettyCash>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<PettyCash | null> {
    return this.repository.findOne({ where: { code } });
  }

  async findActive(): Promise<PettyCash[]> {
    return this.repository.find({ where: { isActive: true } });
  }

  async updateBalance(id: string, amount: number): Promise<PettyCash> {
    const pettyCash = await this.findOne(id);
    const newBalance = Number(pettyCash.balance) + amount;
    if (newBalance < 0) {
      throw new BadRequestException('Insufficient balance');
    }
    await this.repository.update(id, { balance: newBalance });
    return this.findOne(id);
  }
}
