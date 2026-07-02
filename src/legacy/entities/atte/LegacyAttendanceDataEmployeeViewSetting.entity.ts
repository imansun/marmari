import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceDataEmployeeViewSetting' })
export class LegacyAttendanceDataEmployeeViewSetting {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceDataEmployeeViewSettingID' })
  attendanceDataEmployeeViewSettingID: number;

  @Column({ type: 'bigint', name: 'AttendanceDataViewSettingRef' })
  attendanceDataViewSettingRef: number;

  @Column({ type: 'integer', name: 'EmployeeInfoCode' })
  employeeInfoCode: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}