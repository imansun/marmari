import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchAttendancePermissionRequest' })
export class LegacyBatchAttendancePermissionRequest {
  @PrimaryColumn({ type: 'bigint', name: 'BatchAttendancePermissionRequestID' })
  batchAttendancePermissionRequestID: number;

  @Column({ type: 'bigint', name: 'AttendancePermissionRequestStructureRef' })
  attendancePermissionRequestStructureRef: number;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'ToDate', nullable: true })
  toDate: Date | null;

}