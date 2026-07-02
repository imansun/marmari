import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourInventoryVoucher' })
export class LegacyTourInventoryVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'TourInventoryVoucherID' })
  tourInventoryVoucherID: number;

  @Column({ type: 'bigint', name: 'TourRef' })
  tourRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef' })
  inventoryVoucherRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}