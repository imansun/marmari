import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialPrint' })
export class LegacySerialPrint {
  @PrimaryColumn({ type: 'bigint', name: 'SerialPrintID' })
  serialPrintID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'SerialTypeProvider' })
  serialTypeProvider: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'SerialTemplateRef' })
  serialTemplateRef: number;

  @Column({ type: 'character varying', name: 'RdlReportName' })
  rdlReportName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}