import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ComputationalFormula' })
export class LegacyComputationalFormula {
  @PrimaryColumn({ type: 'bigint', name: 'ComputationalFormulaID' })
  computationalFormulaID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'ComputationalFormulaText', nullable: true })
  computationalFormulaText: string | null;

  @Column({ type: 'character varying', name: 'FormulaRefs', nullable: true })
  formulaRefs: string | null;

  @Column({ type: 'character varying', name: 'FormulaSelection', nullable: true })
  formulaSelection: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}