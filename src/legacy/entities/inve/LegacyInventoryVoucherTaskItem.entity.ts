import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryVoucherTaskItem' })
export class LegacyInventoryVoucherTaskItem {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherTaskItemID' })
  inventoryVoucherTaskItemID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherTaskRef' })
  inventoryVoucherTaskRef: number;

  @Column({ type: 'bigint', name: 'RetailServerRef' })
  retailServerRef: number;

  @Column({ type: 'character varying', name: 'Content' })
  content: string;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'ExtraInfo', nullable: true })
  extraInfo: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}