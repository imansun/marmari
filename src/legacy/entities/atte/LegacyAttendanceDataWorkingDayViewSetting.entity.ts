import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceDataWorkingDayViewSetting' })
export class LegacyAttendanceDataWorkingDayViewSetting {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceDataWorkingDayViewSettingID' })
  attendanceDataWorkingDayViewSettingID: number;

  @Column({ type: 'bigint', name: 'AttendanceDataViewSettingRef' })
  attendanceDataViewSettingRef: number;

  @Column({ type: 'integer', name: 'WorkingDayInfoCode' })
  workingDayInfoCode: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}