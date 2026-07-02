import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExcludedControl' })
export class LegacyExcludedControl {
  @PrimaryColumn({ type: 'bigint', name: 'ExcludedControlID' })
  excludedControlID: number;

  @Column({ type: 'bigint', name: 'BudgetEntityDefinitionRef' })
  budgetEntityDefinitionRef: number;

  @Column({ type: 'bigint', name: 'AmountControlDefinitionRef' })
  amountControlDefinitionRef: number;

  @Column({ type: 'boolean', name: 'DoWarn' })
  doWarn: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}