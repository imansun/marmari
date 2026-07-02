import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { LegacyVoucher, LegacyVoucherItem, LegacyVoucherType } from '../entities';

@Injectable()
export class LegacyVoucherService {
  constructor(
    @InjectRepository(LegacyVoucher)
    private readonly voucherRepo: Repository<LegacyVoucher>,
    @InjectRepository(LegacyVoucherItem)
    private readonly voucherItemRepo: Repository<LegacyVoucherItem>,
    @InjectRepository(LegacyVoucherType)
    private readonly voucherTypeRepo: Repository<LegacyVoucherType>,
  ) {}

  async findAll(page = 1, limit = 20) {
    const [data, total] = await this.voucherRepo.findAndCount({
      order: { voucherID: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total, page, limit };
  }

  async findOne(id: number) {
    return this.voucherRepo.findOneBy({ voucherID: id });
  }

  async findByDailyNumber(dailyNumber: number) {
    return this.voucherRepo.find({
      where: { dailyNumber },
      order: { voucherID: 'DESC' },
    });
  }

  async findByDateRange(from: string, to: string, page = 1, limit = 20) {
    const [data, total] = await this.voucherRepo.findAndCount({
      where: { date: Between(new Date(from), new Date(to)) },
      order: { voucherID: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total, page, limit };
  }

  async findVoucherTypes() {
    return this.voucherTypeRepo.find({ order: { voucherTypeID: 'ASC' } });
  }

  async findVoucherType(id: number) {
    return this.voucherTypeRepo.findOneBy({ voucherTypeID: id });
  }

  async findItemsByVoucherId(voucherId: number) {
    return this.voucherItemRepo.find({
      where: { voucherRef: voucherId },
      order: { rowNumber: 'ASC' },
    });
  }
}
