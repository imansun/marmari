import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ClosingVoucherInfo' })
export class LegacyClosingVoucherInfo {
  @PrimaryColumn({ type: 'bigint', name: 'ClosingVoucherInfoID' })
  closingVoucherInfoID: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'boolean', name: 'IsTemporary' })
  isTemporary: boolean;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}