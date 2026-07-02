import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoicePolicyContextItem' })
export class LegacyInvoicePolicyContextItem {
  @PrimaryColumn({ type: 'bigint', name: 'InvoicePolicyContextItemID' })
  invoicePolicyContextItemID: number;

  @Column({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'ItemRef', nullable: true })
  itemRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}