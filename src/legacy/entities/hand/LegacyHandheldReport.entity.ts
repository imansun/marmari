import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldReport' })
export class LegacyHandheldReport {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldReportID' })
  handheldReportID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'ReportPath' })
  reportPath: string;

  @Column({ type: 'boolean', name: 'IsInternal' })
  isInternal: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'EntityType' })
  entityType: string;

  @Column({ type: 'bigint', name: 'HandheldPrinterRef', nullable: true })
  handheldPrinterRef: number | null;

}