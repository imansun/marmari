import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDeliveryReturnExtensionItem' })
export class LegacyProcurementDeliveryReturnExtensionItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDeliveryReturnExtensionItemID' })
  procurementDeliveryReturnExtensionItemID: number;

  @Column({ type: 'bigint', name: 'ProcurementDeliveryReturnExtensionRef' })
  procurementDeliveryReturnExtensionRef: number;

  @Column({ type: 'bigint', name: 'BomRef', nullable: true })
  bomRef: number | null;

  @Column({ type: 'bigint', name: 'DeliveryReturnItemRef' })
  deliveryReturnItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}