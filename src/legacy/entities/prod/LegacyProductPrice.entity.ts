import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductPrice' })
export class LegacyProductPrice {
  @PrimaryColumn({ type: 'bigint', name: 'ProductPriceID' })
  productPriceID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef', nullable: true })
  retailShopRef: number | null;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'PriceListItemRef', nullable: true })
  priceListItemRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'ConsumerFee', nullable: true })
  consumerFee: number | null;

  @Column({ type: 'boolean', name: 'CanChangeFee', default: false })
  canChangeFee: boolean;

  @Column({ type: 'numeric', name: 'PermittedDecreasePercent', nullable: true })
  permittedDecreasePercent: number | null;

  @Column({ type: 'numeric', name: 'PermittedIncreasePercent', nullable: true })
  permittedIncreasePercent: number | null;

}