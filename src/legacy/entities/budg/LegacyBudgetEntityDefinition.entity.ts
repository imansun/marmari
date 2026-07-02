import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetEntityDefinition' })
export class LegacyBudgetEntityDefinition {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetEntityDefinitionID' })
  budgetEntityDefinitionID: number;

  @Column({ type: 'bigint', name: 'BudgetingConfigRef' })
  budgetingConfigRef: number;

  @Column({ type: 'bigint', name: 'BudgetEntityClassificationRef' })
  budgetEntityClassificationRef: number;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}