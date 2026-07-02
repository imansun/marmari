import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReceiptReceivableNote' })
export class LegacyReceiptReceivableNote {
  @PrimaryColumn({ type: 'bigint', name: 'ReceiptReceivableNoteID' })
  receiptReceivableNoteID: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteRef' })
  receivableNoteRef: number;

  @Column({ type: 'bigint', name: 'ReceiptRef' })
  receiptRef: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteTransactionRef' })
  receivableNoteTransactionRef: number;

  @Column({ type: 'bigint', name: 'AccountingOperationRef', nullable: true })
  accountingOperationRef: number | null;

  @Column({ type: 'bigint', name: 'CounterPartRef' })
  counterPartRef: number;

  @Column({ type: 'bigint', name: 'BankRef', nullable: true })
  bankRef: number | null;

  @Column({ type: 'bigint', name: 'CityRef', nullable: true })
  cityRef: number | null;

  @Column({ type: 'bigint', name: 'BankBranchRef', nullable: true })
  bankBranchRef: number | null;

  @Column({ type: 'character varying', name: 'BankBranchCode', nullable: true })
  bankBranchCode: string | null;

  @Column({ type: 'character varying', name: 'BankBranchName', nullable: true })
  bankBranchName: string | null;

  @Column({ type: 'character varying', name: 'AccountNumber', nullable: true })
  accountNumber: string | null;

  @Column({ type: 'bigint', name: 'PartyBankAccountRef', nullable: true })
  partyBankAccountRef: number | null;

  @Column({ type: 'character varying', name: 'InternationalNumber', nullable: true })
  internationalNumber: string | null;

  @Column({ type: 'character varying', name: 'SerialNumber' })
  serialNumber: string;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'CurrencyAmount' })
  currencyAmount: number;

  @Column({ type: 'bigint', name: 'BaseCurrencyRef' })
  baseCurrencyRef: number;

  @Column({ type: 'numeric', name: 'BaseCurrencyExchangeRate' })
  baseCurrencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'BaseCurrencyExchangeRateRef', nullable: true })
  baseCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'BaseCurrencyAmount' })
  baseCurrencyAmount: number;

  @Column({ type: 'numeric', name: 'VATax', nullable: true })
  vATax: number | null;

  @Column({ type: 'numeric', name: 'VAToll', nullable: true })
  vAToll: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DueDate', nullable: true })
  dueDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'AgreementDate', nullable: true })
  agreementDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'CashFlowFactorRef', nullable: true })
  cashFlowFactorRef: number | null;

  @Column({ type: 'integer', name: 'NormalORGuarantee' })
  normalORGuarantee: number;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'character varying', name: 'Series', nullable: true })
  series: string | null;

  @Column({ type: 'character varying', name: 'DL4', nullable: true })
  dL4: string | null;

  @Column({ type: 'character varying', name: 'DL5', nullable: true })
  dL5: string | null;

  @Column({ type: 'character varying', name: 'DL6', nullable: true })
  dL6: string | null;

  @Column({ type: 'character varying', name: 'DL7', nullable: true })
  dL7: string | null;

  @Column({ type: 'character varying', name: 'DL8', nullable: true })
  dL8: string | null;

  @Column({ type: 'character varying', name: 'DL9', nullable: true })
  dL9: string | null;

  @Column({ type: 'bigint', name: 'AccountRef', nullable: true })
  accountRef: number | null;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

  @Column({ type: 'integer', name: 'SourceType', nullable: true })
  sourceType: number | null;

  @Column({ type: 'bigint', name: 'SourceRef', nullable: true })
  sourceRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'SayadNumber', nullable: true })
  sayadNumber: string | null;

}