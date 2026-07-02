import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendancePermissionRequestStructure' })
export class LegacyAttendancePermissionRequestStructure {
  @PrimaryColumn({ type: 'bigint', name: 'AttendancePermissionRequestStructureID' })
  attendancePermissionRequestStructureID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}