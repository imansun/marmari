import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDeliveryExtensionLowerGrade' })
export class LegacyProcurementDeliveryExtensionLowerGrade {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDeliveryExtensionLowerGradeID' })
  procurementDeliveryExtensionLowerGradeID: number;

  @Column({ type: 'bigint', name: 'ProcurementDeliveryExtensionRef' })
  procurementDeliveryExtensionRef: number;

  @Column({ type: 'bigint', name: 'OrderItemRef' })
  orderItemRef: number;

  @Column({ type: 'bigint', name: 'DeliveryItemRef' })
  deliveryItemRef: number;

  @Column({ type: 'bigint', name: 'ProcurementOrderExtensionLowerGradeRef' })
  procurementOrderExtensionLowerGradeRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}