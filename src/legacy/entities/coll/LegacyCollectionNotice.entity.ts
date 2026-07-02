import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CollectionNotice' })
export class LegacyCollectionNotice {
  @PrimaryColumn({ type: 'bigint', name: 'CollectionNoticeID' })
  collectionNoticeID: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'integer', name: 'FundingType' })
  fundingType: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'CounterpartRef', nullable: true })
  counterpartRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'TransferDate', nullable: true })
  transferDate: Date | null;

  @Column({ type: 'numeric', name: 'TransferredAmount', nullable: true })
  transferredAmount: number | null;

  @Column({ type: 'bigint', name: 'TransferCurrencyRef', nullable: true })
  transferCurrencyRef: number | null;

  @Column({ type: 'numeric', name: 'ReceivedAmount' })
  receivedAmount: number;

  @Column({ type: 'bigint', name: 'ReceivedCurrencyRef' })
  receivedCurrencyRef: number;

  @Column({ type: 'bigint', name: 'AccountRef' })
  accountRef: number;

  @Column({ type: 'numeric', name: 'Wage', nullable: true })
  wage: number | null;

  @Column({ type: 'bigint', name: 'WageCurrencyRef', nullable: true })
  wageCurrencyRef: number | null;

  @Column({ type: 'integer', name: 'WageResponsibleType', nullable: true })
  wageResponsibleType: number | null;

  @Column({ type: 'bigint', name: 'BankRef', nullable: true })
  bankRef: number | null;

  @Column({ type: 'bigint', name: 'BankBranchRef', nullable: true })
  bankBranchRef: number | null;

  @Column({ type: 'bigint', name: 'BankAccountRef', nullable: true })
  bankAccountRef: number | null;

  @Column({ type: 'bigint', name: 'PartyBankAccountRef', nullable: true })
  partyBankAccountRef: number | null;

  @Column({ type: 'integer', name: 'CreditItemEntityCode', nullable: true })
  creditItemEntityCode: number | null;

  @Column({ type: 'bigint', name: 'CreditItemEntityRef', nullable: true })
  creditItemEntityRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsEstablishment' })
  isEstablishment: boolean;

  @Column({ type: 'boolean', name: 'CanChangeWage' })
  canChangeWage: boolean;

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

  @Column({ type: 'boolean', name: 'IsExcludedFromItemAnalysis' })
  isExcludedFromItemAnalysis: boolean;

}