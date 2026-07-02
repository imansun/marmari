import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetEntityStandardDescription' })
export class LegacyBudgetEntityStandardDescription {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetEntityStandardDescriptionID' })
  budgetEntityStandardDescriptionID: number;

  @Column({ type: 'bigint', name: 'BudgetEntityClassificationRef' })
  budgetEntityClassificationRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Type', default: 1 })
  type: number;

}