import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineEPayment' })
export class LegacyOfflineEPayment {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineEPaymentID' })
  offlineEPaymentID: number;

  @Column({ type: 'bigint', name: 'BatchNumber' })
  batchNumber: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef', nullable: true })
  retailInteriorSectionRef: number | null;

  @Column({ type: 'character varying', name: 'TrackingNumber', nullable: true })
  trackingNumber: string | null;

  @Column({ type: 'bigint', name: 'SourceBankAccountRef', nullable: true })
  sourceBankAccountRef: number | null;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'character varying', name: 'TargetBankAccountNumber', nullable: true })
  targetBankAccountNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'DayDate', nullable: true })
  dayDate: Date | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bytea', name: 'Picture', nullable: true })
  picture: Buffer | null;

  @Column({ type: 'character varying', name: 'PictureFileName', nullable: true })
  pictureFileName: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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