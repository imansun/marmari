import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountTransactionAnalysisDetail' })
export class LegacyAccountTransactionAnalysisDetail {
  @PrimaryColumn({ type: 'bigint', name: 'AccountTransactionAnalysisDetailID' })
  accountTransactionAnalysisDetailID: number;

  @Column({ type: 'bigint', name: 'AccountTransactionAnalysisRef' })
  accountTransactionAnalysisRef: number;

  @Column({ type: 'bigint', name: 'DebitEntityRef' })
  debitEntityRef: number;

  @Column({ type: 'integer', name: 'DebitEntityCode' })
  debitEntityCode: number;

  @Column({ type: 'bigint', name: 'CreditEntityRef' })
  creditEntityRef: number;

  @Column({ type: 'integer', name: 'CreditEntityCode' })
  creditEntityCode: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}