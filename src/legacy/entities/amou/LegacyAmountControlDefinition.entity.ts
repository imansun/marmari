import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AmountControlDefinition' })
export class LegacyAmountControlDefinition {
  @PrimaryColumn({ type: 'bigint', name: 'AmountControlDefinitionID' })
  amountControlDefinitionID: number;

  @Column({ type: 'bigint', name: 'BudgetingConfigRef' })
  budgetingConfigRef: number;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'bigint', name: 'FormulaRef' })
  formulaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}