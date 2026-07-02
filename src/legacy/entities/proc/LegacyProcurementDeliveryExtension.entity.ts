import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDeliveryExtension' })
export class LegacyProcurementDeliveryExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDeliveryExtensionID' })
  procurementDeliveryExtensionID: number;

  @Column({ type: 'bigint', name: 'DeliveryRef' })
  deliveryRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}