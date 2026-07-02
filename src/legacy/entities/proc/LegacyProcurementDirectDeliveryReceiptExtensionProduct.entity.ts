import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDirectDeliveryReceiptExtensionProduct' })
export class LegacyProcurementDirectDeliveryReceiptExtensionProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDirectDeliveryReceiptExtensionProductID' })
  procurementDirectDeliveryReceiptExtensionProductID: number;

  @Column({ type: 'bigint', name: 'ProcurementDirectDeliveryReceiptExtensionRef' })
  procurementDirectDeliveryReceiptExtensionRef: number;

  @Column({ type: 'bigint', name: 'DirectDeliveryReceiptItemRef' })
  directDeliveryReceiptItemRef: number;

  @Column({ type: 'bigint', name: 'DeliveryItemRef' })
  deliveryItemRef: number;

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