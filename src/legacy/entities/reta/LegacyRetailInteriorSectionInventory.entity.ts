import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailInteriorSectionInventory' })
export class LegacyRetailInteriorSectionInventory {
  @PrimaryColumn({ type: 'bigint', name: 'RetailInteriorSectionInventoryID' })
  retailInteriorSectionInventoryID: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef' })
  retailInteriorSectionRef: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}