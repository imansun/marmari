import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDirectDeliveryReceiptExtensionLowerGrade' })
export class LegacyProcurementDirectDeliveryReceiptExtensionLowerGrade {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDirectDeliveryReceiptExtensionLowerGradeID' })
  procurementDirectDeliveryReceiptExtensionLowerGradeID: number;

  @Column({ type: 'bigint', name: 'ProcurementDirectDeliveryReceiptExtensionRef' })
  procurementDirectDeliveryReceiptExtensionRef: number;

  @Column({ type: 'bigint', name: 'DirectDeliveryReceiptItemRef' })
  directDeliveryReceiptItemRef: number;

  @Column({ type: 'bigint', name: 'DeliveryItemRef' })
  deliveryItemRef: number;

  @Column({ type: 'bigint', name: 'ProcurementDeliveryExtensionLowerGradeRef' })
  procurementDeliveryExtensionLowerGradeRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}