import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FormulaContext' })
export class LegacyFormulaContext {
  @PrimaryColumn({ type: 'bigint', name: 'FormulaContextID' })
  formulaContextID: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'text', name: 'XmlObject' })
  xmlObject: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}