import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceCalculationCalendarMonth' })
export class LegacyAttendanceCalculationCalendarMonth {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceCalculationCalendarMonthID' })
  attendanceCalculationCalendarMonthID: number;

  @Column({ type: 'bigint', name: 'AttendanceCalculationCalendarRef' })
  attendanceCalculationCalendarRef: number;

  @Column({ type: 'boolean', name: 'PreviousMonth' })
  previousMonth: boolean;

  @Column({ type: 'boolean', name: 'NextMonth' })
  nextMonth: boolean;

  @Column({ type: 'integer', name: 'StartDay' })
  startDay: number;

  @Column({ type: 'integer', name: 'EndDay' })
  endDay: number;

  @Column({ type: 'integer', name: 'MonthNumber' })
  monthNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}