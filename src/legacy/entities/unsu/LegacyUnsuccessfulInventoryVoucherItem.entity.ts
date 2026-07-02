import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UnsuccessfulInventoryVoucherItem' })
export class LegacyUnsuccessfulInventoryVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'UnsuccessfulInventoryVoucherItemID' })
  unsuccessfulInventoryVoucherItemID: number;

  @Column({ type: 'bigint', name: 'RationableStockRef' })
  rationableStockRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'character varying', name: 'FailureMessage' })
  failureMessage: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}