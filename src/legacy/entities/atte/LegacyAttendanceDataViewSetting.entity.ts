import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceDataViewSetting' })
export class LegacyAttendanceDataViewSetting {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceDataViewSettingID' })
  attendanceDataViewSettingID: number;

  @Column({ type: 'boolean', name: 'IsForMonthly' })
  isForMonthly: boolean;

  @Column({ type: 'boolean', name: 'DisplayWorkingGroup' })
  displayWorkingGroup: boolean;

  @Column({ type: 'boolean', name: 'DisplayBranch' })
  displayBranch: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'SelfService', default: 0 })
  selfService: number;

}