import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineEReceiptTransaction' })
export class LegacyOfflineEReceiptTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineEReceiptTransactionID' })
  offlineEReceiptTransactionID: number;

  @Column({ type: 'bigint', name: 'BatchNumber' })
  batchNumber: number;

  @Column({ type: 'character varying', name: 'CardNumber', nullable: true })
  cardNumber: string | null;

  @Column({ type: 'bigint', name: 'BankRef', nullable: true })
  bankRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'TransactionNumber', nullable: true })
  transactionNumber: string | null;

  @Column({ type: 'character varying', name: 'TrackingNumber', nullable: true })
  trackingNumber: string | null;

  @Column({ type: 'character varying', name: 'TerminalNumber', nullable: true })
  terminalNumber: string | null;

  @Column({ type: 'bigint', name: 'BankAccountRef', nullable: true })
  bankAccountRef: number | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

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

  @Column({ type: 'bigint', name: 'RetailOfflineDataRef' })
  retailOfflineDataRef: number;

  @Column({ type: 'integer', name: 'SyncState' })
  syncState: number;

  @Column({ type: 'timestamp without time zone', name: 'SyncDate', nullable: true })
  syncDate: Date | null;

  @Column({ type: 'character varying', name: 'SyncErrorMessage', nullable: true })
  syncErrorMessage: string | null;

  @Column({ type: 'character varying', name: 'SyncError', nullable: true })
  syncError: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}