import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceCalcDailyItem' })
export class LegacyAttendanceCalcDailyItem {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceCalcDailyItemID' })
  attendanceCalcDailyItemID: number;

  @Column({ type: 'bigint', name: 'AttendanceCalcRef' })
  attendanceCalcRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorPropertyRef' })
  attendanceFactorPropertyRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'bigint', name: 'AttendanceCalculationCalendarRef', nullable: true })
  attendanceCalculationCalendarRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}