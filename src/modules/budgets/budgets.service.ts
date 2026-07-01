import {
  Injectable,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CrudService } from '../../core';
import { Budget, BudgetItem, BudgetStatus } from './entities/budget.entity';

@Injectable()
export class BudgetsService extends CrudService<Budget> {
  constructor(
    @InjectRepository(Budget)
    repository: Repository<Budget>,
    @InjectRepository(BudgetItem)
    private readonly budgetItemRepository: Repository<BudgetItem>,
    private readonly dataSource: DataSource,
  ) {
    super(repository);
  }

  async createWithItems(dto: {
    code: string;
    name: string;
    fiscalYear: string;
    totalAmount: number;
    costCenterId?: string;
    status?: BudgetStatus;
    items: { allocatedAmount: number; note?: string }[];
  }): Promise<Budget> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing) throw new ConflictException('Budget code already exists');

    const itemsTotal = dto.items.reduce((s, i) => s + i.allocatedAmount, 0);
    if (itemsTotal > dto.totalAmount) {
      throw new BadRequestException(
        'Total allocated amount exceeds budget total',
      );
    }

    const budget = this.repository.create({
      code: dto.code,
      name: dto.name,
      fiscalYear: dto.fiscalYear,
      totalAmount: dto.totalAmount,
      spentAmount: 0,
      remainingAmount: dto.totalAmount,
      costCenterId: dto.costCenterId,
      status: dto.status ?? BudgetStatus.DRAFT,
    });

    const saved = await this.repository.save(budget);

    const items = dto.items.map((item) =>
      this.budgetItemRepository.create({
        budgetId: saved.id,
        allocatedAmount: item.allocatedAmount,
        spentAmount: 0,
        note: item.note,
      }),
    );
    await this.budgetItemRepository.save(items);

    return this.findOne(saved.id);
  }

  async findOne(id: string): Promise<Budget> {
    const budget = await this.repository.findOne({
      where: { id },
      relations: { costCenter: true, items: true },
    });
    if (!budget) throw new BadRequestException('Budget not found');
    return budget;
  }

  async activate(id: string): Promise<Budget> {
    const budget = await this.findOne(id);
    if (budget.status !== BudgetStatus.DRAFT) {
      throw new BadRequestException('Only draft budgets can be activated');
    }
    budget.status = BudgetStatus.ACTIVE;
    return this.repository.save(budget);
  }

  async close(id: string): Promise<Budget> {
    const budget = await this.findOne(id);
    if (budget.status !== BudgetStatus.ACTIVE) {
      throw new BadRequestException('Only active budgets can be closed');
    }
    budget.status = BudgetStatus.CLOSED;
    return this.repository.save(budget);
  }

  async findByFiscalYear(year: string): Promise<Budget[]> {
    return this.repository.find({
      where: { fiscalYear: year },
      relations: { costCenter: true, items: true },
    });
  }
}
