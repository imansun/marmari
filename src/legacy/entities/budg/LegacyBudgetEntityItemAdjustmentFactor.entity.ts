import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetEntityItemAdjustmentFactor' })
export class LegacyBudgetEntityItemAdjustmentFactor {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetEntityItemAdjustmentFactorID' })
  budgetEntityItemAdjustmentFactorID: number;

  @Column({ type: 'bigint', name: 'AdjustmentFactorRef' })
  adjustmentFactorRef: number;

  @Column({ type: 'bigint', name: 'BudgetEntityItemRef' })
  budgetEntityItemRef: number;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

  @Column({ type: 'bigint', name: 'CounterPartRef' })
  counterPartRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'PrimitiveAmount', nullable: true })
  primitiveAmount: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'AdjustmentFactorAmountCalculationMethod' })
  adjustmentFactorAmountCalculationMethod: number;

}