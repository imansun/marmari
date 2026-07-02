import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ItemPrice' })
export class LegacyItemPrice {
  @PrimaryColumn({ type: 'bigint', name: 'ItemPriceID' })
  itemPriceID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'TrackingFactor', nullable: true })
  trackingFactor: string | null;

  @Column({ type: 'bigint', name: 'CardexRef', nullable: true })
  cardexRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'boolean', name: 'IsInput' })
  isInput: boolean;

  @Column({ type: 'boolean', name: 'HasReference' })
  hasReference: boolean;

  @Column({ type: 'boolean', name: 'IsReturn' })
  isReturn: boolean;

  @Column({ type: 'timestamp without time zone', name: 'VoucherCreationDate', nullable: true })
  voucherCreationDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'VoucherDate' })
  voucherDate: Date;

  @Column({ type: 'numeric', name: 'Fee' })
  fee: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'integer', name: 'PriceType' })
  priceType: number;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'integer', name: 'FeeReferenceCode', nullable: true })
  feeReferenceCode: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'numeric', name: 'CurrencyFee' })
  currencyFee: number;

  @Column({ type: 'numeric', name: 'CurrencyPrice' })
  currencyPrice: number;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'bigint', name: 'FeeReferenceRef', nullable: true })
  feeReferenceRef: number | null;

  @Column({ type: 'bigint', name: 'NotTravelledInventoryVoucherItemRef', nullable: true })
  notTravelledInventoryVoucherItemRef: number | null;

  @Column({ type: 'bigint', name: 'VoucherItemRef', nullable: true })
  voucherItemRef: number | null;

  @Column({ type: 'bigint', name: 'PricingFactorItemPriceRef', nullable: true })
  pricingFactorItemPriceRef: number | null;

  @Column({ type: 'bigint', name: 'PricingFactorRef', nullable: true })
  pricingFactorRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'SortingDateInCardex' })
  sortingDateInCardex: Date;

  @Column({ type: 'integer', name: 'SortingNumerator', default: 0 })
  sortingNumerator: number;

  @Column({ type: 'integer', name: 'SortingDenominator', default: 1 })
  sortingDenominator: number;

  @Column({ type: 'numeric', name: 'SortingDeduction' })
  sortingDeduction: number;

  @Column({ type: 'integer', name: 'Effect' })
  effect: number;

  @Column({ type: 'numeric', name: 'NetFee' })
  netFee: number;

  @Column({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @Column({ type: 'numeric', name: 'CurrencyNetFee' })
  currencyNetFee: number;

  @Column({ type: 'numeric', name: 'CurrencyNetPrice' })
  currencyNetPrice: number;

  @Column({ type: 'boolean', name: 'IsIssueByRecalculation', default: false })
  isIssueByRecalculation: boolean;

}