import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailShopAuthorizedInventory' })
export class LegacyRetailShopAuthorizedInventory {
  @PrimaryColumn({ type: 'bigint', name: 'RetailShopAuthorizedInventoryID' })
  retailShopAuthorizedInventoryID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}