import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AcquisitionReceiptItemPurchasePriceElement' })
export class LegacyAcquisitionReceiptItemPurchasePriceElement {
  @PrimaryColumn({ type: 'bigint', name: 'AcquisitionReceiptItemPurchasePriceElementID' })
  acquisitionReceiptItemPurchasePriceElementID: number;

  @Column({ type: 'bigint', name: 'AcquisitionReceiptItemRef' })
  acquisitionReceiptItemRef: number;

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