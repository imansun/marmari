import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryVoucherItemTag' })
export class LegacyInventoryVoucherItemTag {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherItemTagID' })
  inventoryVoucherItemTagID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}