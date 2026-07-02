import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FormulaContextObject' })
export class LegacyFormulaContextObject {
  @PrimaryColumn({ type: 'bigint', name: 'FormulaContextObjectID' })
  formulaContextObjectID: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'bytea', name: 'AssemblyObject', nullable: true })
  assemblyObject: Buffer | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

}