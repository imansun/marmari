import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InputFileStructure' })
export class LegacyInputFileStructure {
  @PrimaryColumn({ type: 'bigint', name: 'InputFileStructureID' })
  inputFileStructureID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Type' })
  type: string;

  @Column({ type: 'character varying', name: 'DefaultName', nullable: true })
  defaultName: string | null;

  @Column({ type: 'character', name: 'FieldSplitter', nullable: true })
  fieldSplitter: string | null;

  @Column({ type: 'character', name: 'TimeSplitter', nullable: true })
  timeSplitter: string | null;

  @Column({ type: 'integer', name: 'CodeColumnIndex', nullable: true })
  codeColumnIndex: number | null;

  @Column({ type: 'integer', name: 'CodeStartColumnIndex', nullable: true })
  codeStartColumnIndex: number | null;

  @Column({ type: 'integer', name: 'CodeColumnLength', nullable: true })
  codeColumnLength: number | null;

  @Column({ type: 'integer', name: 'DateStartColumnIndex', nullable: true })
  dateStartColumnIndex: number | null;

  @Column({ type: 'integer', name: 'DateColumnIndex', nullable: true })
  dateColumnIndex: number | null;

  @Column({ type: 'integer', name: 'CodeCount' })
  codeCount: number;

  @Column({ type: 'character', name: 'CodeSplitter', nullable: true })
  codeSplitter: string | null;

  @Column({ type: 'boolean', name: 'ConsiderFirstRow', nullable: true })
  considerFirstRow: boolean | null;

  @Column({ type: 'bigint', name: 'EntityID', nullable: true })
  entityID: number | null;

  @Column({ type: 'integer', name: 'FileFormatCode' })
  fileFormatCode: number;

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

  @Column({ type: 'integer', name: 'KeyColumnType', default: 1 })
  keyColumnType: number;

}