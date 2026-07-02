import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetEntitySourceInformationItem' })
export class LegacyBudgetEntitySourceInformationItem {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetEntitySourceInformationItemID' })
  budgetEntitySourceInformationItemID: number;

  @Column({ type: 'bigint', name: 'BudgetEntityRef' })
  budgetEntityRef: number;

  @Column({ type: 'integer', name: 'SourceType' })
  sourceType: number;

  @Column({ type: 'bigint', name: 'SourceRef' })
  sourceRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}