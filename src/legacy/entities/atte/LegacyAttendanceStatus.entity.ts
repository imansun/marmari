import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceStatus' })
export class LegacyAttendanceStatus {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceStatusID' })
  attendanceStatusID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'EffectiveOnAttendanceCalc' })
  effectiveOnAttendanceCalc: boolean;

  @Column({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @Column({ type: 'boolean', name: 'ViewInSelfService' })
  viewInSelfService: boolean;

  @Column({ type: 'character', name: 'Color' })
  color: string;

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