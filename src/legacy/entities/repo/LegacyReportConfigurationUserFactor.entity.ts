import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportConfigurationUserFactor' })
export class LegacyReportConfigurationUserFactor {
  @PrimaryColumn({ type: 'bigint', name: 'ReportConfigurationUserFactorID' })
  reportConfigurationUserFactorID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'ReportConfigurationRef' })
  reportConfigurationRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorRef', nullable: true })
  compensationFactorRef: number | null;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef', nullable: true })
  attendanceFactorRef: number | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}