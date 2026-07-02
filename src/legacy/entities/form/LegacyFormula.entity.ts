import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Formula' })
export class LegacyFormula {
  @PrimaryColumn({ type: 'bigint', name: 'FormulaID' })
  formulaID: number;

  @Column({ type: 'character varying', name: 'FormulaText', nullable: true })
  formulaText: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsControl' })
  isControl: boolean;

  @Column({ type: 'boolean', name: 'IsStatic' })
  isStatic: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}