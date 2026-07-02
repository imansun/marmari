import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementPolicySettlementMethodGroup' })
export class LegacySettlementPolicySettlementMethodGroup {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementPolicySettlementMethodGroupID' })
  settlementPolicySettlementMethodGroupID: number;

  @Column({ type: 'bigint', name: 'SettlementPolicyRef' })
  settlementPolicyRef: number;

  @Column({ type: 'bigint', name: 'SettlementMethodGroupRef' })
  settlementMethodGroupRef: number;

  @Column({ type: 'bigint', name: 'PayAtReturnSettlementMethodGroupRef', nullable: true })
  payAtReturnSettlementMethodGroupRef: number | null;

  @Column({ type: 'bigint', name: 'ReceiveAtReturnSettlementMethodGroupRef', nullable: true })
  receiveAtReturnSettlementMethodGroupRef: number | null;

  @Column({ type: 'numeric', name: 'MinPercent', nullable: true })
  minPercent: number | null;

  @Column({ type: 'numeric', name: 'MaxPercent', nullable: true })
  maxPercent: number | null;

  @Column({ type: 'numeric', name: 'MinAmount', nullable: true })
  minAmount: number | null;

  @Column({ type: 'numeric', name: 'MaxAmount', nullable: true })
  maxAmount: number | null;

  @Column({ type: 'boolean', name: 'MorePaymentAllowed' })
  morePaymentAllowed: boolean;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bigint', name: 'EquivalentReturnSettlementMethodGroupRef', nullable: true })
  equivalentReturnSettlementMethodGroupRef: number | null;

  @Column({ type: 'boolean', name: 'HasPriorityAtReturn', nullable: true })
  hasPriorityAtReturn: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}