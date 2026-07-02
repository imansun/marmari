import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetingConfig' })
export class LegacyBudgetingConfig {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetingConfigID' })
  budgetingConfigID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}