import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesItemSalesPriceElement' })
export class LegacySalesItemSalesPriceElement {
  @PrimaryColumn({ type: 'bigint', name: 'SalesItemSalesPriceElementID' })
  salesItemSalesPriceElementID: number;

  @Column({ type: 'bigint', name: 'SalesItemRef' })
  salesItemRef: number;

  @Column({ type: 'integer', name: 'SalesPriceElementType' })
  salesPriceElementType: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyAmount' })
  operationalCurrencyAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}