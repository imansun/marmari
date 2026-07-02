import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineInvoicePolicyResult' })
export class LegacyOfflineInvoicePolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineInvoicePolicyResultID' })
  offlineInvoicePolicyResultID: number;

  @Column({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'character varying', name: 'StringValue' })
  stringValue: string;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'boolean', name: 'IsFixed' })
  isFixed: boolean;

  @Column({ type: 'boolean', name: 'ContainsShrinkedResults' })
  containsShrinkedResults: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}