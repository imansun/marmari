import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceCalculationCalendarType' })
export class LegacyAttendanceCalculationCalendarType {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceCalculationCalendarTypeID' })
  attendanceCalculationCalendarTypeID: number;

  @Column({ type: 'uuid', name: 'Name' })
  name: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}