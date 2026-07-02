import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceCalcPropertyInfo' })
export class LegacyAttendanceCalcPropertyInfo {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceCalcPropertyInfoID' })
  attendanceCalcPropertyInfoID: number;

  @Column({ type: 'bigint', name: 'AttendanceCalcApplyInfoRef' })
  attendanceCalcApplyInfoRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorPropertyRef' })
  attendanceFactorPropertyRef: number;

  @Column({ type: 'integer', name: 'AttendanceFactorScale' })
  attendanceFactorScale: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}