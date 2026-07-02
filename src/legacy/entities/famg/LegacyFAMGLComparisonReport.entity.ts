import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FAMGLComparisonReport' })
export class LegacyFAMGLComparisonReport {
  @PrimaryColumn({ type: 'bigint', name: 'FAMGLComparisonReportID' })
  fAMGLComparisonReportID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'ToFiscalYearRef' })
  toFiscalYearRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'integer', name: 'FAMGLComparisonAccountGroupType' })
  fAMGLComparisonAccountGroupType: number;

  @Column({ type: 'integer', name: 'FAMGLComparisonType' })
  fAMGLComparisonType: number;

}