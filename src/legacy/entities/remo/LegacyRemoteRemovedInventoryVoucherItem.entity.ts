import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RemoteRemovedInventoryVoucherItem' })
export class LegacyRemoteRemovedInventoryVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'RemoteRemovedInventoryVoucherItemID' })
  remoteRemovedInventoryVoucherItemID: number;

  @Column({ type: 'bigint', name: 'RemoteRemovedInventoryVoucherRef' })
  remoteRemovedInventoryVoucherRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'bigint', name: 'InvoicePermitItemRef' })
  invoicePermitItemRef: number;

  @Column({ type: 'bigint', name: 'OrderingRetailShopRef' })
  orderingRetailShopRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'PriorQuantity', nullable: true })
  priorQuantity: number | null;

  @Column({ type: 'integer', name: 'Action' })
  action: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}