import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AdjustmentFactor' })
export class LegacyAdjustmentFactor {
  @PrimaryColumn({ type: 'bigint', name: 'AdjustmentFactorID' })
  adjustmentFactorID: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'integer', name: 'CalculationMethod' })
  calculationMethod: number;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

  @Column({ type: 'boolean', name: 'IsEditable' })
  isEditable: boolean;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'AdjustmentFactorBankAccountSelectingType', nullable: true })
  adjustmentFactorBankAccountSelectingType: number | null;

  @Column({ type: 'bigint', name: 'BankAccountRef', nullable: true })
  bankAccountRef: number | null;

  @Column({ type: 'integer', name: 'AdjustmentFactorCounterPartSelectingType', default: 1 })
  adjustmentFactorCounterPartSelectingType: number;

}