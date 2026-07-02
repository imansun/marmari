import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GLVoucherItem' })
export class LegacyGLVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'GLVoucherItemID' })
  gLVoucherItemID: number;

  @Column({ type: 'bigint', name: 'GLVoucherRef' })
  gLVoucherRef: number;

  @Column({ type: 'bigint', name: 'GLRef' })
  gLRef: number;

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}