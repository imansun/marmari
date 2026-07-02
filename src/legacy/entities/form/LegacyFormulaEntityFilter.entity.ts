import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FormulaEntityFilter' })
export class LegacyFormulaEntityFilter {
  @PrimaryColumn({ type: 'bigint', name: 'FormulaEntityFilterID' })
  formulaEntityFilterID: number;

  @Column({ type: 'bigint', name: 'FormulaEntityRef' })
  formulaEntityRef: number;

  @Column({ type: 'character varying', name: 'Key', nullable: true })
  key: string | null;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}