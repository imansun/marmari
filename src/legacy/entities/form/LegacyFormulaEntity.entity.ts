import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FormulaEntity' })
export class LegacyFormulaEntity {
  @PrimaryColumn({ type: 'bigint', name: 'FormulaEntityID' })
  formulaEntityID: number;

  @Column({ type: 'bigint', name: 'FormulaRef' })
  formulaRef: number;

  @Column({ type: 'character varying', name: 'EntityTitle', nullable: true })
  entityTitle: string | null;

  @Column({ type: 'bigint', name: 'BudgetEntityClassificationRef' })
  budgetEntityClassificationRef: number;

  @Column({ type: 'boolean', name: 'IsNegative' })
  isNegative: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}