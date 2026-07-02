import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DataTransferMethod' })
export class LegacyDataTransferMethod {
  @PrimaryColumn({ type: 'bigint', name: 'DataTransferMethodID' })
  dataTransferMethodID: number;

  @Column({ type: 'character varying', name: 'UniqueId', nullable: true })
  uniqueId: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'Systematic' })
  systematic: boolean;

  @Column({ type: 'integer', name: 'EntityCode', default: 0 })
  entityCode: number;

  @Column({ type: 'character varying', name: 'SheetName' })
  sheetName: string;

  @Column({ type: 'boolean', name: 'FirstRowHasHeader' })
  firstRowHasHeader: boolean;

  @Column({ type: 'boolean', name: 'HasSample' })
  hasSample: boolean;

  @Column({ type: 'bytea', name: 'SampleExcel', nullable: true })
  sampleExcel: Buffer | null;

  @Column({ type: 'character varying', name: 'SampleExcelName', nullable: true })
  sampleExcelName: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}