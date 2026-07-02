import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceCalcMonthlyItem' })
export class LegacyAttendanceCalcMonthlyItem {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceCalcMonthlyItemID' })
  attendanceCalcMonthlyItemID: number;

  @Column({ type: 'bigint', name: 'AttendanceCalcRef' })
  attendanceCalcRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorPropertyRef' })
  attendanceFactorPropertyRef: number;

  @Column({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}