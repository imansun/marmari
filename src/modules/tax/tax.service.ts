import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThanOrEqual } from 'typeorm';
import { CrudService } from '../../core';
import { TaxTable } from './entities/tax-table.entity';

@Injectable()
export class TaxTablesService extends CrudService<TaxTable> {
  constructor(
    @InjectRepository(TaxTable)
    repository: Repository<TaxTable>,
  ) {
    super(repository);
  }

  async getActiveTable(code: string): Promise<TaxTable | null> {
    const now = new Date().toISOString().split('T')[0];
    return this.repository.findOne({
      where: {
        code,
        isActive: true,
        effectiveFrom: LessThanOrEqual(now),
      },
      relations: { items: true },
    });
  }

  async calculateTax(tableCode: string, amount: number): Promise<number> {
    const table = await this.getActiveTable(tableCode);
    if (!table) return 0;

    let taxAmount = 0;
    for (const item of table.items) {
      const baseAmount = Math.min(amount, item.maxAmount ?? amount);
      const taxableAmount = item.minAmount
        ? Math.max(0, baseAmount - item.minAmount)
        : baseAmount;
      taxAmount += taxableAmount * (item.rate / 100);
    }
    return taxAmount;
  }
}
