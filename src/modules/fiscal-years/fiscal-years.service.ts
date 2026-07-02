import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { CrudService } from '../../core';
import { FiscalYear } from './entities/fiscal-year.entity';

@Injectable()
export class FiscalYearsService extends CrudService<FiscalYear> {
  constructor(
    @InjectRepository(FiscalYear)
    repository: Repository<FiscalYear>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<FiscalYear | null> {
    return this.repository.findOne({ where: { code } });
  }

  async findActive(): Promise<FiscalYear[]> {
    return this.repository.find({ where: { isActive: true } });
  }

  async findCurrent(): Promise<FiscalYear | null> {
    const now = new Date();
    return this.repository.findOne({
      where: {
        startDate: LessThanOrEqual(now),
        endDate: MoreThanOrEqual(now),
        isActive: true,
      },
    });
  }
}
