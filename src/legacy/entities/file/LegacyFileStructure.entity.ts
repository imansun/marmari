import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FileStructure' })
export class LegacyFileStructure {
  @PrimaryColumn({ type: 'bigint', name: 'FileStructureID' })
  fileStructureID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Type' })
  type: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'FileName' })
  fileName: string;

  @Column({ type: 'character varying', name: 'FieldSeparator', nullable: true })
  fieldSeparator: string | null;

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

  @Column({ type: 'smallint', name: 'EncodingType', default: 1 })
  encodingType: number;

  @Column({ type: 'integer', name: 'SubType', nullable: true })
  subType: number | null;

}