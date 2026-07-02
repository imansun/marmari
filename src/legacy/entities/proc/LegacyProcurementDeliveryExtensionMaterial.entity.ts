import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDeliveryExtensionMaterial' })
export class LegacyProcurementDeliveryExtensionMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDeliveryExtensionMaterialID' })
  procurementDeliveryExtensionMaterialID: number;

  @Column({ type: 'bigint', name: 'ProcurementDeliveryExtensionRef' })
  procurementDeliveryExtensionRef: number;

  @Column({ type: 'bigint', name: 'DeliveryItemRef' })
  deliveryItemRef: number;

  @Column({ type: 'bigint', name: 'OrderItemRef', nullable: true })
  orderItemRef: number | null;

  @Column({ type: 'bigint', name: 'DeliveryReturnItemRef', nullable: true })
  deliveryReturnItemRef: number | null;

  @Column({ type: 'bigint', name: 'ProcurementOrderExtensionMaterialRef', nullable: true })
  procurementOrderExtensionMaterialRef: number | null;

  @Column({ type: 'bigint', name: 'ProcurementDeliveryReturnExtensionMaterialRef', nullable: true })
  procurementDeliveryReturnExtensionMaterialRef: number | null;

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