import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BookletComparitiveReportingPeriodPresentation' })
export class LegacyBookletComparitiveReportingPeriodPresentation {
  @PrimaryColumn({ type: 'bigint', name: 'BookletComparitiveReportingPeriodPresentationID' })
  bookletComparitiveReportingPeriodPresentationID: number;

  @Column({ type: 'integer', name: 'OrderNumber' })
  orderNumber: number;

  @Column({ type: 'integer', name: 'StatementType' })
  statementType: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'NoteNumber' })
  noteNumber: string;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'bigint', name: 'StatementRef' })
  statementRef: number;

  @Column({ type: 'boolean', name: 'ShowComparativeReportingPeriod1' })
  showComparativeReportingPeriod1: boolean;

  @Column({ type: 'boolean', name: 'ShowComparativeReportingPeriod2' })
  showComparativeReportingPeriod2: boolean;

  @Column({ type: 'boolean', name: 'ShowComparativeReportingPeriod3' })
  showComparativeReportingPeriod3: boolean;

  @Column({ type: 'boolean', name: 'ShowComparativeReportingPeriod4' })
  showComparativeReportingPeriod4: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}