import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AmountControlDefinitionEntity' })
export class LegacyAmountControlDefinitionEntity {
  @PrimaryColumn({ type: 'bigint', name: 'AmountControlDefinitionEntityID' })
  amountControlDefinitionEntityID: number;

  @Column({ type: 'bigint', name: 'AmountControlDefinitionRef' })
  amountControlDefinitionRef: number;

  @Column({ type: 'bigint', name: 'BudgetEntityDefinitionRef' })
  budgetEntityDefinitionRef: number;

  @Column({ type: 'boolean', name: 'IsNegative' })
  isNegative: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}