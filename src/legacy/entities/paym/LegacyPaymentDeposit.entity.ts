import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentDeposit' })
export class LegacyPaymentDeposit {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentDepositID' })
  paymentDepositID: number;

  @Column({ type: 'bigint', name: 'PaymentRef' })
  paymentRef: number;

  @Column({ type: 'bigint', name: 'AccountingOperationRef', nullable: true })
  accountingOperationRef: number | null;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'bigint', name: 'CashFlowFactorRef', nullable: true })
  cashFlowFactorRef: number | null;

  @Column({ type: 'bigint', name: 'BankAccountRef' })
  bankAccountRef: number;

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

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

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

  @Column({ type: 'bigint', name: 'CounterPartBankAccountRef', nullable: true })
  counterPartBankAccountRef: number | null;

  @Column({ type: 'character varying', name: 'CounterPartBankAccountNumber', nullable: true })
  counterPartBankAccountNumber: string | null;

  @Column({ type: 'character varying', name: 'CounterPartInternationalNumber', nullable: true })
  counterPartInternationalNumber: string | null;

  @Column({ type: 'numeric', name: 'BankFee', nullable: true })
  bankFee: number | null;

}