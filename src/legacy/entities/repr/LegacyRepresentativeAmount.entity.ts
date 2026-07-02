import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RepresentativeAmount' })
export class LegacyRepresentativeAmount {
  @PrimaryColumn({ type: 'bigint', name: 'RepresentativeAmountID' })
  representativeAmountID: number;

  @Column({ type: 'bigint', name: 'BudgetEntityDefinitionRef' })
  budgetEntityDefinitionRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bigint', name: 'FormulaRef' })
  formulaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}