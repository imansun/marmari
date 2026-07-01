import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { CostCenter } from './entities/cost-center.entity';

@Injectable()
export class CostCentersService extends CrudService<CostCenter> {
  constructor(
    @InjectRepository(CostCenter)
    repository: Repository<CostCenter>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<CostCenter | null> {
    return this.repository.findOne({ where: { code } });
  }

  async findActive(): Promise<CostCenter[]> {
    return this.repository.find({ where: { isActive: true } });
  }
}
