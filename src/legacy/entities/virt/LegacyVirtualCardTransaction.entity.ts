import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VirtualCardTransaction' })
export class LegacyVirtualCardTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'VirtualCardTransactionID' })
  virtualCardTransactionID: number;

  @Column({ type: 'character varying', name: 'CardNumber', nullable: true })
  cardNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'TransactionNumber', nullable: true })
  transactionNumber: string | null;

  @Column({ type: 'character varying', name: 'TrackingNumber', nullable: true })
  trackingNumber: string | null;

  @Column({ type: 'character varying', name: 'TerminalNumber', nullable: true })
  terminalNumber: string | null;

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

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'OfflineID', nullable: true })
  offlineID: number | null;

  @Column({ type: 'bigint', name: 'VirtualCardProviderRef' })
  virtualCardProviderRef: number;

}