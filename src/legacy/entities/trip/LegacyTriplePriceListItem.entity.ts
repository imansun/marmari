import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TriplePriceListItem' })
export class LegacyTriplePriceListItem {
  @PrimaryColumn({ type: 'bigint', name: 'TriplePriceListItemID' })
  triplePriceListItemID: number;

  @Column({ type: 'bigint', name: 'TriplePriceListRef' })
  triplePriceListRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'numeric', name: 'PurchasePrice' })
  purchasePrice: number;

  @Column({ type: 'numeric', name: 'SalePrice' })
  salePrice: number;

  @Column({ type: 'numeric', name: 'ConsumerPrice' })
  consumerPrice: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}