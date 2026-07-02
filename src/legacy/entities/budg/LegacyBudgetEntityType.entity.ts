import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetEntityType' })
export class LegacyBudgetEntityType {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetEntityTypeID' })
  budgetEntityTypeID: number;

  @Column({ type: 'bigint', name: 'BudgetEntityClassificationRef' })
  budgetEntityClassificationRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}