import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'QuotationPolicyResult' })
export class LegacyQuotationPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'QuotationPolicyResultID' })
  quotationPolicyResultID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'QuotationRef' })
  quotationRef: number;

  @Column({ type: 'integer', name: 'RowIndex' })
  rowIndex: number;

  @Column({ type: 'text', name: 'Value' })
  value: string;

  @Column({ type: 'bigint', name: 'QuotationItemRef', nullable: true })
  quotationItemRef: number | null;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

}