import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShippingPointInventory' })
export class LegacyShippingPointInventory {
  @PrimaryColumn({ type: 'bigint', name: 'ShippingPointInventoryID' })
  shippingPointInventoryID: number;

  @Column({ type: 'bigint', name: 'ShippingPointRef' })
  shippingPointRef: number;

  @Column({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}