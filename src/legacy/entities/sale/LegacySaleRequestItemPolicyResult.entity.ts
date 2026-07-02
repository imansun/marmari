import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SaleRequestItemPolicyResult' })
export class LegacySaleRequestItemPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'SaleRequestItemPolicyResultID' })
  saleRequestItemPolicyResultID: number;

  @Column({ type: 'bigint', name: 'SaleRequestItemRef' })
  saleRequestItemRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'text', name: 'Value' })
  value: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'SaleRequestPolicyResultRef', nullable: true })
  saleRequestPolicyResultRef: number | null;

}