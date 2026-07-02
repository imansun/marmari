import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityReport' })
export class LegacyEntityReport {
  @PrimaryColumn({ type: 'bigint', name: 'EntityReportID' })
  entityReportID: number;

  @Column({ type: 'character varying', name: 'ComponentName' })
  componentName: string;

  @Column({ type: 'character varying', name: 'EntityName' })
  entityName: string;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'character varying', name: 'ReportUrl' })
  reportUrl: string;

  @Column({ type: 'boolean', name: 'IsSystemReport' })
  isSystemReport: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}