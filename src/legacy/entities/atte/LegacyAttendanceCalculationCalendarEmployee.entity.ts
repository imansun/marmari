import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceCalculationCalendarEmployee' })
export class LegacyAttendanceCalculationCalendarEmployee {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceCalculationCalendarEmployeeID' })
  attendanceCalculationCalendarEmployeeID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'AttendanceCalculationCalendarTypeRef' })
  attendanceCalculationCalendarTypeRef: number;

  @Column({ type: 'bigint', name: 'AttendanceCalculationCalendarRef' })
  attendanceCalculationCalendarRef: number;

  @Column({ type: 'integer', name: 'JoinYearMonth' })
  joinYearMonth: number;

  @Column({ type: 'timestamp without time zone', name: 'JoinDate' })
  joinDate: Date;

  @Column({ type: 'integer', name: 'ExitYearMonth', nullable: true })
  exitYearMonth: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ExitDate', nullable: true })
  exitDate: Date | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}