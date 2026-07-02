import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetingBatchAmendingFilter' })
export class LegacyBudgetingBatchAmendingFilter {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetingBatchAmendingFilterID' })
  budgetingBatchAmendingFilterID: number;

  @Column({ type: 'bigint', name: 'BudgetingBatchAmendingRef' })
  budgetingBatchAmendingRef: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'text', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}