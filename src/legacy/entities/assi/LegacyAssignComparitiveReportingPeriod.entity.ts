import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssignComparitiveReportingPeriod' })
export class LegacyAssignComparitiveReportingPeriod {
  @PrimaryColumn({ type: 'bigint', name: 'AssignComparitiveReportingPeriodID' })
  assignComparitiveReportingPeriodID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'bigint', name: 'AssignedReportingPeriodRef' })
  assignedReportingPeriodRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}