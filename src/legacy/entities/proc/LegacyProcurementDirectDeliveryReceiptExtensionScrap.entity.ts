import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDirectDeliveryReceiptExtensionScrap' })
export class LegacyProcurementDirectDeliveryReceiptExtensionScrap {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDirectDeliveryReceiptExtensionScrapID' })
  procurementDirectDeliveryReceiptExtensionScrapID: number;

  @Column({ type: 'bigint', name: 'ProcurementDirectDeliveryReceiptExtensionRef' })
  procurementDirectDeliveryReceiptExtensionRef: number;

  @Column({ type: 'bigint', name: 'DirectDeliveryReceiptItemRef' })
  directDeliveryReceiptItemRef: number;

  @Column({ type: 'bigint', name: 'DeliveryItemRef' })
  deliveryItemRef: number;

  @Column({ type: 'bigint', name: 'ProcurementDeliveryExtensionScrapRef' })
  procurementDeliveryExtensionScrapRef: number;

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