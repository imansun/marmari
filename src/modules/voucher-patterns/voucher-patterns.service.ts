import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { VoucherPattern } from './entities/voucher-pattern.entity';

@Injectable()
export class VoucherPatternsService extends CrudService<VoucherPattern> {
  constructor(
    @InjectRepository(VoucherPattern)
    repository: Repository<VoucherPattern>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<VoucherPattern | null> {
    return this.repository.findOne({ where: { code } });
  }

  async findByVoucherType(voucherTypeId: string): Promise<VoucherPattern[]> {
    return this.repository.find({ where: { voucherTypeId } });
  }

  async findActive(): Promise<VoucherPattern[]> {
    return this.repository.find({ where: { isActive: true } });
  }
}
