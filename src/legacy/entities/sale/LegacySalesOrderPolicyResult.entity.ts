import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOrderPolicyResult' })
export class LegacySalesOrderPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOrderPolicyResultID' })
  salesOrderPolicyResultID: number;

  @Column({ type: 'bigint', name: 'SalesOrderRef' })
  salesOrderRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'text', name: 'Value' })
  value: string;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'boolean', name: 'IsFixed' })
  isFixed: boolean;

  @Column({ type: 'boolean', name: 'ContainsShrinkedResults' })
  containsShrinkedResults: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}