import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WalletTransaction' })
export class LegacyWalletTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'WalletTransactionID' })
  walletTransactionID: number;

  @Column({ type: 'integer', name: 'ValidationType' })
  validationType: number;

  @Column({ type: 'bigint', name: 'ProviderRef' })
  providerRef: number;

  @Column({ type: 'integer', name: 'TransactionType' })
  transactionType: number;

  @Column({ type: 'character varying', name: 'TransactionNumber' })
  transactionNumber: string;

  @Column({ type: 'character varying', name: 'TrackingNumber' })
  trackingNumber: string;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

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

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

}