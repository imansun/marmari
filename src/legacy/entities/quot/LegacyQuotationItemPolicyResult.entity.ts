import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'QuotationItemPolicyResult' })
export class LegacyQuotationItemPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'QuotationItemPolicyResultID' })
  quotationItemPolicyResultID: number;

  @Column({ type: 'bigint', name: 'QuotationItemRef' })
  quotationItemRef: number;

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

  @Column({ type: 'bigint', name: 'QuotationPolicyResultRef', nullable: true })
  quotationPolicyResultRef: number | null;

  @Column({ type: 'text', name: 'Value' })
  value: string;

}