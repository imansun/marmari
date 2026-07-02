import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseMiscCostItem' })
export class LegacyPurchaseMiscCostItem {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseMiscCostItemID' })
  purchaseMiscCostItemID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'numeric', name: 'PriceInOperationalCurrency' })
  priceInOperationalCurrency: number;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'IsDirectCurrencyExchange', nullable: true })
  isDirectCurrencyExchange: boolean | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'PurchaseMiscCostRef' })
  purchaseMiscCostRef: number;

  @Column({ type: 'bigint', name: 'MiscCostRef' })
  miscCostRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'PurchaseMiscCostItemDate', nullable: true })
  purchaseMiscCostItemDate: Date | null;

  @Column({ type: 'integer', name: 'EffectType' })
  effectType: number;

  @Column({ type: 'boolean', name: 'RefundableTax' })
  refundableTax: boolean;

  @Column({ type: 'numeric', name: 'Additions', nullable: true })
  additions: number | null;

  @Column({ type: 'numeric', name: 'Deductions', nullable: true })
  deductions: number | null;

  @Column({ type: 'numeric', name: 'Duty', nullable: true })
  duty: number | null;

  @Column({ type: 'numeric', name: 'Tax', nullable: true })
  tax: number | null;

  @Column({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

}