import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineReturnInvoiceItemPolicyResult' })
export class LegacyOfflineReturnInvoiceItemPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineReturnInvoiceItemPolicyResultID' })
  offlineReturnInvoiceItemPolicyResultID: number;

  @Column({ type: 'bigint', name: 'ReturnInvoiceItemRef' })
  returnInvoiceItemRef: number;

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

  @Column({ type: 'bigint', name: 'ReturnInvoicePolicyResultRef', nullable: true })
  returnInvoicePolicyResultRef: number | null;

  @Column({ type: 'boolean', name: 'IsFixed' })
  isFixed: boolean;

  @Column({ type: 'character varying', name: 'StringValue' })
  stringValue: string;

}