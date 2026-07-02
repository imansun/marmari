import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportSettingAttendanceFactor' })
export class LegacyReportSettingAttendanceFactor {
  @PrimaryColumn({ type: 'bigint', name: 'ReportSettingAttendanceFactorID' })
  reportSettingAttendanceFactorID: number;

  @Column({ type: 'bigint', name: 'ReportSettingItemRef' })
  reportSettingItemRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}