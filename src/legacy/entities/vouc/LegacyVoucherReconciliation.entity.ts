import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherReconciliation' })
export class LegacyVoucherReconciliation {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherReconciliationID' })
  voucherReconciliationID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'BankAccountRef' })
  bankAccountRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'boolean', name: 'IsReconciliateAllItems' })
  isReconciliateAllItems: boolean;

  @Column({ type: 'timestamp without time zone', name: 'BaseDate', nullable: true })
  baseDate: Date | null;

  @Column({ type: 'bigint', name: 'VoucherReconciliationDeploymentRef', nullable: true })
  voucherReconciliationDeploymentRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}