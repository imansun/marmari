import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ChangeCostItemPriceElement' })
export class LegacyChangeCostItemPriceElement {
  @PrimaryColumn({ type: 'bigint', name: 'ChangeCostItemPriceElementID' })
  changeCostItemPriceElementID: number;

  @Column({ type: 'bigint', name: 'ChangeCostItemRef' })
  changeCostItemRef: number;

  @Column({ type: 'bigint', name: 'PurchasePriceElementRef' })
  purchasePriceElementRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyAmount' })
  operationalCurrencyAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}