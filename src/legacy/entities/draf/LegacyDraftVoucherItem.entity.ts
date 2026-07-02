import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DraftVoucherItem' })
export class LegacyDraftVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'DraftVoucherItemID' })
  draftVoucherItemID: number;

  @Column({ type: 'bigint', name: 'DraftVoucherRef' })
  draftVoucherRef: number;

  @Column({ type: 'bigint', name: 'AccountingVoucherTemplateItemRef', nullable: true })
  accountingVoucherTemplateItemRef: number | null;

  @Column({ type: 'bigint', name: 'EntityID', nullable: true })
  entityID: number | null;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'DLRef4', nullable: true })
  dLRef4: number | null;

  @Column({ type: 'bigint', name: 'DLRef5', nullable: true })
  dLRef5: number | null;

  @Column({ type: 'bigint', name: 'DLRef6', nullable: true })
  dLRef6: number | null;

  @Column({ type: 'bigint', name: 'DLRef7', nullable: true })
  dLRef7: number | null;

  @Column({ type: 'bigint', name: 'DLRef8', nullable: true })
  dLRef8: number | null;

  @Column({ type: 'bigint', name: 'DLRef9', nullable: true })
  dLRef9: number | null;

  @Column({ type: 'bigint', name: 'DLRef10', nullable: true })
  dLRef10: number | null;

  @Column({ type: 'bigint', name: 'DLRef11', nullable: true })
  dLRef11: number | null;

  @Column({ type: 'bigint', name: 'DLRef12', nullable: true })
  dLRef12: number | null;

  @Column({ type: 'bigint', name: 'DLRef13', nullable: true })
  dLRef13: number | null;

  @Column({ type: 'bigint', name: 'DLRef14', nullable: true })
  dLRef14: number | null;

  @Column({ type: 'bigint', name: 'DLRef15', nullable: true })
  dLRef15: number | null;

  @Column({ type: 'bigint', name: 'DLRef16', nullable: true })
  dLRef16: number | null;

  @Column({ type: 'bigint', name: 'DLRef17', nullable: true })
  dLRef17: number | null;

  @Column({ type: 'bigint', name: 'DLRef18', nullable: true })
  dLRef18: number | null;

  @Column({ type: 'bigint', name: 'DLRef19', nullable: true })
  dLRef19: number | null;

  @Column({ type: 'bigint', name: 'DLRef20', nullable: true })
  dLRef20: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'character varying', name: 'FollowUpNumber', nullable: true })
  followUpNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'FollowUpDate', nullable: true })
  followUpDate: Date | null;

  @Column({ type: 'character varying', name: 'MetaData', nullable: true })
  metaData: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'VoucherItemRef', nullable: true })
  voucherItemRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'bigint', name: 'BaseCurrencyRef', nullable: true })
  baseCurrencyRef: number | null;

  @Column({ type: 'bigint', name: 'TargetCurrencyRef', nullable: true })
  targetCurrencyRef: number | null;

  @Column({ type: 'numeric', name: 'TargetCurrencyDebit', nullable: true })
  targetCurrencyDebit: number | null;

  @Column({ type: 'numeric', name: 'TargetCurrencyCredit', nullable: true })
  targetCurrencyCredit: number | null;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'bigint', name: 'BaseCurrencyExchangeRateRef', nullable: true })
  baseCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'BaseCurrencyExchangeRate', nullable: true })
  baseCurrencyExchangeRate: number | null;

  @Column({ type: 'numeric', name: 'CurrencyDebit', nullable: true })
  currencyDebit: number | null;

  @Column({ type: 'numeric', name: 'CurrencyCredit', nullable: true })
  currencyCredit: number | null;

}