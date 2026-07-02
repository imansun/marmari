import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceCalcApplyInfo' })
export class LegacyAttendanceCalcApplyInfo {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceCalcApplyInfoID' })
  attendanceCalcApplyInfoID: number;

  @Column({ type: 'bigint', name: 'AttendanceCalcRef' })
  attendanceCalcRef: number;

  @Column({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @Column({ type: 'timestamp without time zone', name: 'FirstDayInMonth' })
  firstDayInMonth: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastDayInMonth' })
  lastDayInMonth: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}