import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TriplePriceListRelation' })
export class LegacyTriplePriceListRelation {
  @PrimaryColumn({ type: 'bigint', name: 'TriplePriceListRelationID' })
  triplePriceListRelationID: number;

  @Column({ type: 'bigint', name: 'TriplePriceListRef' })
  triplePriceListRef: number;

  @Column({ type: 'bigint', name: 'SalesPriceListRef' })
  salesPriceListRef: number;

  @Column({ type: 'bigint', name: 'ConsumerPriceListRef' })
  consumerPriceListRef: number;

  @Column({ type: 'bigint', name: 'InventoryPriceListRef' })
  inventoryPriceListRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}