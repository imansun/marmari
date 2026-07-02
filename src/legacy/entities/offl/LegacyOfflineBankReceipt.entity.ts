import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineBankReceipt' })
export class LegacyOfflineBankReceipt {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineBankReceiptID' })
  offlineBankReceiptID: number;

  @Column({ type: 'bigint', name: 'BatchNumber' })
  batchNumber: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef', nullable: true })
  retailInteriorSectionRef: number | null;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'bigint', name: 'BankRef', nullable: true })
  bankRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'DayDate', nullable: true })
  dayDate: Date | null;

  @Column({ type: 'bigint', name: 'BankBranchRef', nullable: true })
  bankBranchRef: number | null;

  @Column({ type: 'bigint', name: 'BankBranchCityRef', nullable: true })
  bankBranchCityRef: number | null;

  @Column({ type: 'bigint', name: 'CounterpartPartyRef', nullable: true })
  counterpartPartyRef: number | null;

  @Column({ type: 'bigint', name: 'BankAccountRef', nullable: true })
  bankAccountRef: number | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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