import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CollectionNoticeItem' })
export class LegacyCollectionNoticeItem {
  @PrimaryColumn({ type: 'bigint', name: 'CollectionNoticeItemID' })
  collectionNoticeItemID: number;

  @Column({ type: 'bigint', name: 'CollectionNoticeRef' })
  collectionNoticeRef: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'ProformaRef', nullable: true })
  proformaRef: number | null;

  @Column({ type: 'numeric', name: 'InitialAmount' })
  initialAmount: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'InitialAmountByReferenceCurrency' })
  initialAmountByReferenceCurrency: number;

  @Column({ type: 'numeric', name: 'AmountByReferenceCurrency' })
  amountByReferenceCurrency: number;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'integer', name: 'ExchangeRateDateType' })
  exchangeRateDateType: number;

  @Column({ type: 'timestamp without time zone', name: 'ExchangeRateDate', nullable: true })
  exchangeRateDate: Date | null;

  @Column({ type: 'boolean', name: 'RateIsReversed' })
  rateIsReversed: boolean;

  @Column({ type: 'boolean', name: 'IsPrepayment' })
  isPrepayment: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}