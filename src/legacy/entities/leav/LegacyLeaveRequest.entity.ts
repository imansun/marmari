import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LeaveRequest' })
export class LegacyLeaveRequest {
  @PrimaryColumn({ type: 'bigint', name: 'LeaveRequestID' })
  leaveRequestID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'LeaveTypeRef' })
  leaveTypeRef: number;

  @Column({ type: 'bigint', name: 'LeaveTypePropertyRef' })
  leaveTypePropertyRef: number;

  @Column({ type: 'character varying', name: 'RequestNumber', nullable: true })
  requestNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate' })
  requestDate: Date;

  @Column({ type: 'boolean', name: 'IsDaily' })
  isDaily: boolean;

  @Column({ type: 'timestamp without time zone', name: 'FromDateTime' })
  fromDateTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDateTime' })
  toDateTime: Date;

  @Column({ type: 'bigint', name: 'SubstituteRef', nullable: true })
  substituteRef: number | null;

  @Column({ type: 'character varying', name: 'UrgentPhoneNumber', nullable: true })
  urgentPhoneNumber: string | null;

  @Column({ type: 'character varying', name: 'Reason', nullable: true })
  reason: string | null;

  @Column({ type: 'boolean', name: 'AllowInsertGap', nullable: true })
  allowInsertGap: boolean | null;

  @Column({ type: 'character varying', name: 'OverflowEntitlementMessage', nullable: true })
  overflowEntitlementMessage: string | null;

  @Column({ type: 'bigint', name: 'FirstConfirmerRef', nullable: true })
  firstConfirmerRef: number | null;

  @Column({ type: 'bigint', name: 'SecondConfirmerRef', nullable: true })
  secondConfirmerRef: number | null;

  @Column({ type: 'bigint', name: 'ThirdConfirmerRef', nullable: true })
  thirdConfirmerRef: number | null;

  @Column({ type: 'bigint', name: 'ConfirmerRef', nullable: true })
  confirmerRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmDate', nullable: true })
  confirmDate: Date | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

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

  @Column({ type: 'character varying', name: 'BatchTitle', nullable: true })
  batchTitle: string | null;

  @Column({ type: 'uuid', name: 'BatchKey', nullable: true })
  batchKey: string | null;

  @Column({ type: 'boolean', name: 'IsBeforeLeaveRemainder', default: false })
  isBeforeLeaveRemainder: boolean;

}