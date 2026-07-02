import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DeletedVoucher' })
export class LegacyDeletedVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'DeletedVoucherID' })
  deletedVoucherID: number;

  @Column({ type: 'bigint', name: 'ReferenceNumber', nullable: true })
  referenceNumber: number | null;

  @Column({ type: 'integer', name: 'VoucherNumber' })
  voucherNumber: number;

  @Column({ type: 'integer', name: 'VoucherSequence' })
  voucherSequence: number;

  @Column({ type: 'integer', name: 'VoucherDailyNumber' })
  voucherDailyNumber: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'timestamp without time zone', name: 'VoucherDate' })
  voucherDate: Date;

  @Column({ type: 'bigint', name: 'VoucherCreator' })
  voucherCreator: number;

  @Column({ type: 'bigint', name: 'Deleter' })
  deleter: number;

  @Column({ type: 'timestamp without time zone', name: 'DateOfRemoval' })
  dateOfRemoval: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}