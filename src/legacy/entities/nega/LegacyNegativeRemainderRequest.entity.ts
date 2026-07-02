import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NegativeRemainderRequest' })
export class LegacyNegativeRemainderRequest {
  @PrimaryColumn({ type: 'bigint', name: 'NegativeRemainderRequestID' })
  negativeRemainderRequestID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'EffectiveYearMonth' })
  effectiveYearMonth: number;

  @Column({ type: 'bigint', name: 'LeaveTypeRef' })
  leaveTypeRef: number;

  @Column({ type: 'integer', name: 'NegativeRemainType', default: 2 })
  negativeRemainType: number;

  @Column({ type: 'integer', name: 'MaxNegativeDay', nullable: true })
  maxNegativeDay: number | null;

  @Column({ type: 'integer', name: 'MaxNegativeHour', nullable: true })
  maxNegativeHour: number | null;

  @Column({ type: 'integer', name: 'MaxNegativeMinute', nullable: true })
  maxNegativeMinute: number | null;

  @Column({ type: 'integer', name: 'Status', default: 1 })
  status: number;

  @Column({ type: 'bigint', name: 'ConfirmerRef', nullable: true })
  confirmerRef: number | null;

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