import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDeliveryExtensionProduct' })
export class LegacyProcurementDeliveryExtensionProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDeliveryExtensionProductID' })
  procurementDeliveryExtensionProductID: number;

  @Column({ type: 'bigint', name: 'ProcurementDeliveryExtensionRef' })
  procurementDeliveryExtensionRef: number;

  @Column({ type: 'bigint', name: 'DeliveryItemRef' })
  deliveryItemRef: number;

  @Column({ type: 'bigint', name: 'OrderItemRef', nullable: true })
  orderItemRef: number | null;

  @Column({ type: 'bigint', name: 'DeliveryReturnItemRef', nullable: true })
  deliveryReturnItemRef: number | null;

  @Column({ type: 'bigint', name: 'SubcontractingOrderRef' })
  subcontractingOrderRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}