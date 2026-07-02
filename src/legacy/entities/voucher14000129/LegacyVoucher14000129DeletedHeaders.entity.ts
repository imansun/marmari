import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'voucher14000129_DeletedHeaders' })
export class LegacyVoucher14000129DeletedHeaders {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherID' })
  voucherID: number;

  @PrimaryColumn({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @PrimaryColumn({ type: 'integer', name: 'Number' })
  number: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Sequence' })
  sequence: number;

  @PrimaryColumn({ type: 'integer', name: 'DailyNumber' })
  dailyNumber: number;

  @PrimaryColumn({ type: 'character varying', name: 'AuxiliaryNumber' })
  auxiliaryNumber: string | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @PrimaryColumn({ type: 'bigint', name: 'VoucherTypeRef' })
  voucherTypeRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Description_En' })
  descriptionEn: string | null;

  @PrimaryColumn({ type: 'integer', name: 'State' })
  state: number;

  @PrimaryColumn({ type: 'boolean', name: 'IsTemporary' })
  isTemporary: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'IsCurrencyBased' })
  isCurrencyBased: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'IsExternal' })
  isExternal: boolean;

  @PrimaryColumn({ type: 'bigint', name: 'ReferenceNumber' })
  referenceNumber: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'ShowCurrencyFields' })
  showCurrencyFields: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'IsReadonly' })
  isReadonly: boolean;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

}