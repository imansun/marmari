import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingProduct' })
export class LegacyRoutingProduct {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingProductID' })
  routingProductID: number;

  @Column({ type: 'bigint', name: 'RoutingRef' })
  routingRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'ScrapStoreRef', nullable: true })
  scrapStoreRef: number | null;

  @Column({ type: 'boolean', name: 'AutomaticGoodsReciept' })
  automaticGoodsReciept: boolean;

  @Column({ type: 'boolean', name: 'AutomaticScrapGoodsReciept' })
  automaticScrapGoodsReciept: boolean;

  @Column({ type: 'boolean', name: 'AutomaticReceiptPermit' })
  automaticReceiptPermit: boolean;

  @Column({ type: 'boolean', name: 'AutomaticScrapReceiptPermit' })
  automaticScrapReceiptPermit: boolean;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'bigint', name: 'ScrapInventoryVoucherSpecificationRef', nullable: true })
  scrapInventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}