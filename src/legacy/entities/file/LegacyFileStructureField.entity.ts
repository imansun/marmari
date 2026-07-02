import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FileStructureField' })
export class LegacyFileStructureField {
  @PrimaryColumn({ type: 'bigint', name: 'FileStructureFieldID' })
  fileStructureFieldID: number;

  @Column({ type: 'bigint', name: 'FileStructureRef' })
  fileStructureRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'DataTypeCode' })
  dataTypeCode: number;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'integer', name: 'LocationCode' })
  locationCode: number;

  @Column({ type: 'integer', name: 'AssignTypeCode' })
  assignTypeCode: number;

  @Column({ type: 'boolean', name: 'ZeroFilter' })
  zeroFilter: boolean;

  @Column({ type: 'character varying', name: 'DefaultValue', nullable: true })
  defaultValue: string | null;

  @Column({ type: 'integer', name: 'Length', nullable: true })
  length: number | null;

  @Column({ type: 'boolean', name: 'Summary' })
  summary: boolean;

  @Column({ type: 'boolean', name: 'Included' })
  included: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}