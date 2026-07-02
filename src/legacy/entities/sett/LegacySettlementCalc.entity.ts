import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementCalc' })
export class LegacySettlementCalc {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementCalcID' })
  settlementCalcID: number;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'EmployeeStatuteRef' })
  employeeStatuteRef: number;

  @Column({ type: 'timestamp without time zone', name: 'SettlementDate' })
  settlementDate: Date;

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

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'Confirmer', nullable: true })
  confirmer: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmDate', nullable: true })
  confirmDate: Date | null;

  @Column({ type: 'uuid', name: 'BatchGuid', nullable: true })
  batchGuid: string | null;

  @Column({ type: 'character varying', name: 'BatchTitle', nullable: true })
  batchTitle: string | null;

}