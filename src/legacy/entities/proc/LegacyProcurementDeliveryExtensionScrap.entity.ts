import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDeliveryExtensionScrap' })
export class LegacyProcurementDeliveryExtensionScrap {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDeliveryExtensionScrapID' })
  procurementDeliveryExtensionScrapID: number;

  @Column({ type: 'bigint', name: 'ProcurementDeliveryExtensionRef' })
  procurementDeliveryExtensionRef: number;

  @Column({ type: 'bigint', name: 'DeliveryItemRef' })
  deliveryItemRef: number;

  @Column({ type: 'bigint', name: 'OrderItemRef' })
  orderItemRef: number;

  @Column({ type: 'bigint', name: 'ProcurementOrderExtensionScrapRef' })
  procurementOrderExtensionScrapRef: number;

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