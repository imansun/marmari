import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchAttendancePermission' })
export class LegacyBatchAttendancePermission {
  @PrimaryColumn({ type: 'bigint', name: 'BatchAttendancePermissionID' })
  batchAttendancePermissionID: number;

  @Column({ type: 'bigint', name: 'AttendancePermissionTypeRef' })
  attendancePermissionTypeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate' })
  requestDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmDate', nullable: true })
  confirmDate: Date | null;

  @Column({ type: 'bigint', name: 'Confirmer', nullable: true })
  confirmer: number | null;

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

}