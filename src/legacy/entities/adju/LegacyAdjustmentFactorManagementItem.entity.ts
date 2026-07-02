import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AdjustmentFactorManagementItem' })
export class LegacyAdjustmentFactorManagementItem {
  @PrimaryColumn({ type: 'bigint', name: 'AdjustmentFactorManagementItemID' })
  adjustmentFactorManagementItemID: number;

  @Column({ type: 'bigint', name: 'AdjustmentFactorManagementRef' })
  adjustmentFactorManagementRef: number;

  @Column({ type: 'bigint', name: 'BudgetEntityItemAdjutmentFactorRef' })
  budgetEntityItemAdjutmentFactorRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Sign' })
  sign: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

}