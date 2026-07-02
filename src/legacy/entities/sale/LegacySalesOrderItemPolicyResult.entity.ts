import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOrderItemPolicyResult' })
export class LegacySalesOrderItemPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOrderItemPolicyResultID' })
  salesOrderItemPolicyResultID: number;

  @Column({ type: 'bigint', name: 'SalesOrderItemRef' })
  salesOrderItemRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'numeric', name: 'EffectivePrice', nullable: true })
  effectivePrice: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'SalesOrderPolicyResultRef', nullable: true })
  salesOrderPolicyResultRef: number | null;

  @Column({ type: 'boolean', name: 'IsFixed' })
  isFixed: boolean;

  @Column({ type: 'text', name: 'Value' })
  value: string;

}