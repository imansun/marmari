import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExitPermit' })
export class LegacyExitPermit {
  @PrimaryColumn({ type: 'bigint', name: 'ExitPermitID' })
  exitPermitID: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExitDate', nullable: true })
  exitDate: Date | null;

  @Column({ type: 'integer', name: 'ExitTime', nullable: true })
  exitTime: number | null;

  @Column({ type: 'integer', name: 'SourceType' })
  sourceType: number;

  @Column({ type: 'bigint', name: 'SourceRef' })
  sourceRef: number;

  @Column({ type: 'bigint', name: 'ExpellantRef', nullable: true })
  expellantRef: number | null;

  @Column({ type: 'bigint', name: 'ShiftGuardRef', nullable: true })
  shiftGuardRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Approver', nullable: true })
  approver: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ApprovalDate', nullable: true })
  approvalDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}