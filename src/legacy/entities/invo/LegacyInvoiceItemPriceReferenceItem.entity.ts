import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoiceItemPriceReferenceItem' })
export class LegacyInvoiceItemPriceReferenceItem {
  @PrimaryColumn({ type: 'bigint', name: 'InvoiceItemPriceReferenceItemID' })
  invoiceItemPriceReferenceItemID: number;

  @Column({ type: 'bigint', name: 'InvoiceItemRef' })
  invoiceItemRef: number;

  @Column({ type: 'bigint', name: 'PriceReferenceItemRef' })
  priceReferenceItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}