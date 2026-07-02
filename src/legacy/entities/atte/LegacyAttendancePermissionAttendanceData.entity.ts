import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendancePermissionAttendanceData' })
export class LegacyAttendancePermissionAttendanceData {
  @PrimaryColumn({ type: 'bigint', name: 'AttendancePermissionAttendanceDataID' })
  attendancePermissionAttendanceDataID: number;

  @Column({ type: 'bigint', name: 'AttendancePermissionRef' })
  attendancePermissionRef: number;

  @Column({ type: 'bigint', name: 'AttendanceDataRef' })
  attendanceDataRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}