import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetEntityCategory' })
export class LegacyBudgetEntityCategory {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetEntityCategoryID' })
  budgetEntityCategoryID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'smallint', name: 'DisplayOrder' })
  displayOrder: number;

  @Column({ type: 'character varying', name: 'IconKey', nullable: true })
  iconKey: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}