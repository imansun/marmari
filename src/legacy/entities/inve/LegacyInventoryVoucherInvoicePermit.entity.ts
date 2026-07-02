import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryVoucherInvoicePermit' })
export class LegacyInventoryVoucherInvoicePermit {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherInvoicePermitID' })
  inventoryVoucherInvoicePermitID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef' })
  inventoryVoucherRef: number;

  @Column({ type: 'bigint', name: 'InvoicePermitRef' })
  invoicePermitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}