import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyCreditTransactionItem' })
export class LegacyLoyaltyCreditTransactionItem {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyCreditTransactionItemID' })
  loyaltyCreditTransactionItemID: number;

  @Column({ type: 'bigint', name: 'LoyaltyCreditTransactionRef' })
  loyaltyCreditTransactionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef', nullable: true })
  businessPolicyConditionRowRef: number | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'integer', name: 'TransactionType' })
  transactionType: number;

  @Column({ type: 'bigint', name: 'DataRef', nullable: true })
  dataRef: number | null;

  @Column({ type: 'bigint', name: 'DataRefType', nullable: true })
  dataRefType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}