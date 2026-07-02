import {
  Injectable,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CrudService } from '../../core';
import { EventsService, DomainEvents } from '../../events';
import { Voucher, VoucherState } from './entities/voucher.entity';
import { VoucherItem } from './entities/voucher-item.entity';
import { VoucherType } from './entities/voucher-type.entity';

@Injectable()
export class VouchersService extends CrudService<Voucher> {
  constructor(
    @InjectRepository(Voucher)
    repository: Repository<Voucher>,
    @InjectRepository(VoucherItem)
    private readonly itemsRepository: Repository<VoucherItem>,
    private readonly dataSource: DataSource,
    private readonly events: EventsService,
  ) {
    super(repository);
  }

  async createWithItems(dto: {
    dailyNumber: number;
    date: string;
    voucherTypeId: string;
    description?: string;
    items: Partial<VoucherItem>[];
  }): Promise<Voucher> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      let totalDebit = 0;
      let totalCredit = 0;

      for (const item of dto.items) {
        totalDebit += Number(item.debit) || 0;
        totalCredit += Number(item.credit) || 0;
      }

      if (Math.abs(totalDebit - totalCredit) > 0.01) {
        throw new BadRequestException('Debit and credit totals must be equal');
      }

      const voucher = this.repository.create({
        dailyNumber: dto.dailyNumber,
        date: new Date(dto.date),
        voucherTypeId: dto.voucherTypeId,
        description: dto.description,
        state: VoucherState.DRAFT,
        totalDebit,
        totalCredit,
      });

      const savedVoucher = await queryRunner.manager.save(voucher);

      const items = dto.items.map((item) =>
        this.itemsRepository.create({
          ...item,
          voucherId: savedVoucher.id,
        }),
      );

      savedVoucher.items = await queryRunner.manager.save(items);
      await queryRunner.commitTransaction();

      return this.findOne(savedVoucher.id);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async confirm(id: string): Promise<Voucher> {
    const voucher = await this.findOne(id);
    if (voucher.state !== VoucherState.DRAFT) {
      throw new ForbiddenException('Only draft vouchers can be confirmed');
    }
    voucher.state = VoucherState.CONFIRMED;
    const saved = await this.repository.save(voucher);
    this.events.emit(DomainEvents.VOUCHER_CONFIRMED, {
      type: DomainEvents.VOUCHER_CONFIRMED,
      entityId: id,
    });
    return saved;
  }

  async approve(id: string): Promise<Voucher> {
    const voucher = await this.findOne(id);
    if (voucher.state !== VoucherState.CONFIRMED) {
      throw new ForbiddenException('Only confirmed vouchers can be approved');
    }
    voucher.state = VoucherState.APPROVED;
    return this.repository.save(voucher);
  }

  async reject(id: string): Promise<Voucher> {
    const voucher = await this.findOne(id);
    if (voucher.state === VoucherState.CLOSED) {
      throw new ForbiddenException('Closed vouchers cannot be rejected');
    }
    voucher.state = VoucherState.REJECTED;
    const saved = await this.repository.save(voucher);
    this.events.emit(DomainEvents.VOUCHER_REJECTED, {
      type: DomainEvents.VOUCHER_REJECTED,
      entityId: id,
    });
    return saved;
  }

  async getDailyReport(date: string): Promise<{ date: string; count: number; totalDebit: number; totalCredit: number; vouchers: Voucher[] }> {
    const targetDate = new Date(date);
    const nextDate = new Date(targetDate);
    nextDate.setDate(nextDate.getDate() + 1);

    const vouchers = await this.repository.find({
      where: {
        date: targetDate as any,
      },
      order: { dailyNumber: 'ASC' },
    });

    const totalDebit = vouchers.reduce((s, v) => s + Number(v.totalDebit || 0), 0);
    const totalCredit = vouchers.reduce((s, v) => s + Number(v.totalCredit || 0), 0);

    return { date, count: vouchers.length, totalDebit, totalCredit, vouchers };
  }
}

@Injectable()
export class VoucherTypesService extends CrudService<VoucherType> {
  constructor(
    @InjectRepository(VoucherType)
    repository: Repository<VoucherType>,
  ) {
    super(repository);
  }
}
