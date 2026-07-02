import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineInvoiceItemPolicyResult' })
export class LegacyOfflineInvoiceItemPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineInvoiceItemPolicyResultID' })
  offlineInvoiceItemPolicyResultID: number;

  @Column({ type: 'bigint', name: 'InvoiceItemRef' })
  invoiceItemRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'InvoicePolicyResultRef', nullable: true })
  invoicePolicyResultRef: number | null;

  @Column({ type: 'boolean', name: 'IsFixed' })
  isFixed: boolean;

  @Column({ type: 'character varying', name: 'StringValue' })
  stringValue: string;

}