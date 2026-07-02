import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountTransactionAnalysis' })
export class LegacyAccountTransactionAnalysis {
  @Column({ type: 'bigint', name: 'AccountRef' })
  accountRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'AccountTransactionAnalysisID' })
  accountTransactionAnalysisID: number;

  @Column({ type: 'bigint', name: 'DebitEntityRef', nullable: true })
  debitEntityRef: number | null;

  @Column({ type: 'integer', name: 'DebitEntityCode', nullable: true })
  debitEntityCode: number | null;

  @Column({ type: 'bigint', name: 'DebitTransactionRef', nullable: true })
  debitTransactionRef: number | null;

  @Column({ type: 'bigint', name: 'CreditEntityRef', nullable: true })
  creditEntityRef: number | null;

  @Column({ type: 'integer', name: 'CreditEntityCode', nullable: true })
  creditEntityCode: number | null;

  @Column({ type: 'bigint', name: 'CreditTransactionRef', nullable: true })
  creditTransactionRef: number | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'boolean', name: 'IsSystematic' })
  isSystematic: boolean;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}