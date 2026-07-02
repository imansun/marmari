import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LeaveRemainder' })
export class LegacyLeaveRemainder {
  @PrimaryColumn({ type: 'bigint', name: 'LeaveRemainderID' })
  leaveRemainderID: number;

  @Column({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'LeaveTypeRef' })
  leaveTypeRef: number;

  @Column({ type: 'bigint', name: 'LeaveTypePropertyRef', nullable: true })
  leaveTypePropertyRef: number | null;

  @Column({ type: 'integer', name: 'EffectiveYearMonth' })
  effectiveYearMonth: number;

  @Column({ type: 'integer', name: 'Value' })
  value: number;

  @Column({ type: 'boolean', name: 'IsTemporary', default: false })
  isTemporary: boolean;

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

  @Column({ type: 'boolean', name: 'IsDeployedRemaining' })
  isDeployedRemaining: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'IsInactive', default: false })
  isInactive: boolean;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

}