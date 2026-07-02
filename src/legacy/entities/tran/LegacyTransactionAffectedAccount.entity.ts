import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransactionAffectedAccount' })
export class LegacyTransactionAffectedAccount {
  @PrimaryColumn({ type: 'bigint', name: 'TransactionAffectedAccountID' })
  transactionAffectedAccountID: number;

  @Column({ type: 'bigint', name: 'AffectingTransactionRef' })
  affectingTransactionRef: number;

  @Column({ type: 'bigint', name: 'AffectedAccountRef' })
  affectedAccountRef: number;

  @Column({ type: 'integer', name: 'AmountAffectionType' })
  amountAffectionType: number;

  @Column({ type: 'numeric', name: 'AffectedAmount', nullable: true })
  affectedAmount: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}