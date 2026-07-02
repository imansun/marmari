import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LeaveRequestAttendanceData' })
export class LegacyLeaveRequestAttendanceData {
  @PrimaryColumn({ type: 'bigint', name: 'LeaveRequestAttendanceDataID' })
  leaveRequestAttendanceDataID: number;

  @Column({ type: 'bigint', name: 'LeaveRequestRef' })
  leaveRequestRef: number;

  @Column({ type: 'bigint', name: 'AttendanceDataRef' })
  attendanceDataRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}