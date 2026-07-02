import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Cheque' })
export class LegacyCheque {
  @PrimaryColumn({ type: 'bigint', name: 'ChequeID' })
  chequeID: number;

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

  @Column({ type: 'character varying', name: 'BankBranchCode', nullable: true })
  bankBranchCode: string | null;

  @Column({ type: 'character varying', name: 'BankBranchName', nullable: true })
  bankBranchName: string | null;

  @Column({ type: 'bigint', name: 'BankBranchCityRef', nullable: true })
  bankBranchCityRef: number | null;

  @Column({ type: 'bigint', name: 'CounterpartPartyRef', nullable: true })
  counterpartPartyRef: number | null;

  @Column({ type: 'character varying', name: 'AccountNumber', nullable: true })
  accountNumber: string | null;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

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

  @Column({ type: 'bigint', name: 'CashierRef', nullable: true })
  cashierRef: number | null;

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

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'OfflineID', nullable: true })
  offlineID: number | null;

  @Column({ type: 'character varying', name: 'SAYADNumber', nullable: true })
  sAYADNumber: string | null;

  @Column({ type: 'character varying', name: 'ShebaCode', nullable: true })
  shebaCode: string | null;

  @Column({ type: 'character varying', name: 'PayTo', nullable: true })
  payTo: string | null;

}