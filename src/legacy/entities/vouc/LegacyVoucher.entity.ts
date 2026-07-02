import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Voucher' })
export class LegacyVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherID' })
  voucherID: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'integer', name: 'Number', nullable: true })
  number: number | null;

  @Column({ type: 'integer', name: 'Sequence' })
  sequence: number;

  @Column({ type: 'integer', name: 'DailyNumber' })
  dailyNumber: number;

  @Column({ type: 'character varying', name: 'AuxiliaryNumber', nullable: true })
  auxiliaryNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'VoucherTypeRef' })
  voucherTypeRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsTemporary' })
  isTemporary: boolean;

  @Column({ type: 'boolean', name: 'IsCurrencyBased' })
  isCurrencyBased: boolean;

  @Column({ type: 'boolean', name: 'IsExternal' })
  isExternal: boolean;

  @Column({ type: 'bigint', name: 'ReferenceNumber', nullable: true })
  referenceNumber: number | null;

  @Column({ type: 'boolean', name: 'ShowCurrencyFields' })
  showCurrencyFields: boolean;

  @Column({ type: 'boolean', name: 'IsReadonly', default: false })
  isReadonly: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}