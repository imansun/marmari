import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { CostCenter } from '../../cost-centers/entities/cost-center.entity';

export enum BudgetStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  CLOSED = 'closed',
}

@Entity('budgets', { schema: 'public' })
export class Budget extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty()
  @Column({ length: 10 })
  fiscalYear: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalAmount: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  spentAmount: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  remainingAmount: number;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  costCenterId?: string;

  @ManyToOne(() => CostCenter, { nullable: true, eager: true })
  @JoinColumn({ name: 'costCenterId' })
  costCenter?: CostCenter;

  @ApiProperty({ enum: BudgetStatus, default: BudgetStatus.DRAFT })
  @Column({
    type: 'enum',
    enum: BudgetStatus,
    default: BudgetStatus.DRAFT,
  })
  status: BudgetStatus;

  @OneToMany(() => BudgetItem, (item) => item.budget, { cascade: true })
  items: BudgetItem[];
}

@Entity('budget_items', { schema: 'public' })
export class BudgetItem extends BaseEntity {
  @ManyToOne(() => Budget, (budget) => budget.items)
  @JoinColumn({ name: 'budgetId' })
  budget: Budget;

  @ApiProperty()
  @Column()
  budgetId: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  allocatedAmount: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  spentAmount: number;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  note?: string;
}
