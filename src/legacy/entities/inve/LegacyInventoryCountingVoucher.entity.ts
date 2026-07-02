import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryCountingVoucher' })
export class LegacyInventoryCountingVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryCountingVoucherID' })
  inventoryCountingVoucherID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef' })
  inventoryVoucherRef: number;

  @Column({ type: 'bigint', name: 'InventoryCountingRef' })
  inventoryCountingRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}