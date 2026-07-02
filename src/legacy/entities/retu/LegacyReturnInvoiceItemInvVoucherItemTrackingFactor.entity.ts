import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReturnInvoiceItemInvVoucherItemTrackingFactor' })
export class LegacyReturnInvoiceItemInvVoucherItemTrackingFactor {
  @PrimaryColumn({ type: 'bigint', name: 'ReturnInvoiceItemInvVoucherItemTrackingFactorID' })
  returnInvoiceItemInvVoucherItemTrackingFactorID: number;

  @Column({ type: 'bigint', name: 'ReturnInvoiceItemRef' })
  returnInvoiceItemRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemTrackingFactorRef' })
  inventoryVoucherItemTrackingFactorRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}