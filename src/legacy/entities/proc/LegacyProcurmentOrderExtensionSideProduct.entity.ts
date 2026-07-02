import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurmentOrderExtensionSideProduct' })
export class LegacyProcurmentOrderExtensionSideProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurmentOrderExtensionSideProductID' })
  procurmentOrderExtensionSideProductID: number;

  @Column({ type: 'bigint', name: 'ProcurmentOrderExtensionItemRef' })
  procurmentOrderExtensionItemRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}