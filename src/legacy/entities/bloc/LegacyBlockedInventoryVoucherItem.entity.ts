import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BlockedInventoryVoucherItem' })
export class LegacyBlockedInventoryVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'BlockedInventoryVoucherItemID' })
  blockedInventoryVoucherItemID: number;

  @Column({ type: 'bigint', name: 'OutputInventoryVoucherRef' })
  outputInventoryVoucherRef: number;

  @Column({ type: 'bigint', name: 'OutputInventoryVoucherItemRef' })
  outputInventoryVoucherItemRef: number;

  @Column({ type: 'bigint', name: 'OutputInventoryVoucherItemTrackingFactorRef', nullable: true })
  outputInventoryVoucherItemTrackingFactorRef: number | null;

  @Column({ type: 'bigint', name: 'ProformaItemRef' })
  proformaItemRef: number;

  @Column({ type: 'bigint', name: 'InputInventoryVoucherRef' })
  inputInventoryVoucherRef: number;

  @Column({ type: 'bigint', name: 'InputInventoryVoucherItemRef' })
  inputInventoryVoucherItemRef: number;

  @Column({ type: 'bigint', name: 'InputInventoryVoucherItemTrackingFactorRef', nullable: true })
  inputInventoryVoucherItemTrackingFactorRef: number | null;

  @Column({ type: 'numeric', name: 'BlockedQuantity' })
  blockedQuantity: number;

  @Column({ type: 'numeric', name: 'ItemBlockedQuantity' })
  itemBlockedQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}