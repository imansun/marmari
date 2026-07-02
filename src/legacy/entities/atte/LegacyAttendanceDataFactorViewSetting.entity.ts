import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceDataFactorViewSetting' })
export class LegacyAttendanceDataFactorViewSetting {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceDataFactorViewSettingID' })
  attendanceDataFactorViewSettingID: number;

  @Column({ type: 'bigint', name: 'AttendanceDataViewSettingRef' })
  attendanceDataViewSettingRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @Column({ type: 'character', name: 'Color' })
  color: string;

  @Column({ type: 'integer', name: 'ConditionCode', nullable: true })
  conditionCode: number | null;

  @Column({ type: 'numeric', name: 'ConditionValue', nullable: true })
  conditionValue: number | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}