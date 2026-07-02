import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDirectDeliveryReceiptExtension' })
export class LegacyProcurementDirectDeliveryReceiptExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDirectDeliveryReceiptExtensionID' })
  procurementDirectDeliveryReceiptExtensionID: number;

  @Column({ type: 'bigint', name: 'DirectDeliveryReceiptRef' })
  directDeliveryReceiptRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}