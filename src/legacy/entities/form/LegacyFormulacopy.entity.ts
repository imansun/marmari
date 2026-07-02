import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Formulacopy' })
export class LegacyFormulacopy {
  @PrimaryColumn({ type: 'bigint', name: 'FormulaID' })
  formulaID: number;

  @PrimaryColumn({ type: 'character varying', name: 'FormulaBody' })
  formulaBody: string;

  @PrimaryColumn({ type: 'bytea', name: 'UIObject' })
  uIObject: Buffer | null;

  @PrimaryColumn({ type: 'character varying', name: 'ModuleName' })
  moduleName: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}