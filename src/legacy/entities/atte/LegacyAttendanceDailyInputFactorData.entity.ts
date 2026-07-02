import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceDailyInputFactorData' })
export class LegacyAttendanceDailyInputFactorData {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceDailyInputFactorDataID' })
  attendanceDailyInputFactorDataID: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorPropertyRef' })
  attendanceFactorPropertyRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'bigint', name: 'AttendancePermissionRequestRef', nullable: true })
  attendancePermissionRequestRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}