import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CollectionNoticeItemAnalysis' })
export class LegacyCollectionNoticeItemAnalysis {
  @PrimaryColumn({ type: 'bigint', name: 'CollectionNoticeItemAnalysisID' })
  collectionNoticeItemAnalysisID: number;

  @Column({ type: 'bigint', name: 'CollectionNoticeItemRef' })
  collectionNoticeItemRef: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'bigint', name: 'ProformaRef' })
  proformaRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'AmountByReceivedCurrency' })
  amountByReceivedCurrency: number;

  @Column({ type: 'timestamp without time zone', name: 'ExchangeRateDate', nullable: true })
  exchangeRateDate: Date | null;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'boolean', name: 'RateIsReversed' })
  rateIsReversed: boolean;

  @Column({ type: 'boolean', name: 'IsSystematic' })
  isSystematic: boolean;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Index' })
  index: number;

}