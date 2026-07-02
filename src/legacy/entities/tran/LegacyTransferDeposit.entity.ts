import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransferDeposit' })
export class LegacyTransferDeposit {
  @PrimaryColumn({ type: 'bigint', name: 'TransferDepositID' })
  transferDepositID: number;

  @Column({ type: 'bigint', name: 'TransferRef' })
  transferRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'SourceBankAccountRef' })
  sourceBankAccountRef: number;

  @Column({ type: 'bigint', name: 'DestinationBankAccountRef', nullable: true })
  destinationBankAccountRef: number | null;

  @Column({ type: 'bigint', name: 'DestinationCashRef', nullable: true })
  destinationCashRef: number | null;

  @Column({ type: 'bigint', name: 'PaymentAccountingOperationRef' })
  paymentAccountingOperationRef: number;

  @Column({ type: 'bigint', name: 'ReceiptAccountingOperationRef', nullable: true })
  receiptAccountingOperationRef: number | null;

  @Column({ type: 'bigint', name: 'PaymentCashFlowFactorRef', nullable: true })
  paymentCashFlowFactorRef: number | null;

  @Column({ type: 'bigint', name: 'ReceiptCashFlowFactorRef', nullable: true })
  receiptCashFlowFactorRef: number | null;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'PaymentCurrencyRef' })
  paymentCurrencyRef: number;

  @Column({ type: 'bigint', name: 'ReceiptCurrencyRef' })
  receiptCurrencyRef: number;

  @Column({ type: 'numeric', name: 'PaymentAmount' })
  paymentAmount: number;

  @Column({ type: 'numeric', name: 'ReceiptAmount' })
  receiptAmount: number;

  @Column({ type: 'numeric', name: 'PaymentOperationalCurrencyExchangeRate' })
  paymentOperationalCurrencyExchangeRate: number;

  @Column({ type: 'numeric', name: 'ReceiptOperationalCurrencyExchangeRate' })
  receiptOperationalCurrencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'PaymentOperationalCurrencyExchangeRateRef', nullable: true })
  paymentOperationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'bigint', name: 'ReceiptOperationalCurrencyExchangeRateRef', nullable: true })
  receiptOperationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'PaymentOperationalCurrencyAmount' })
  paymentOperationalCurrencyAmount: number;

  @Column({ type: 'numeric', name: 'ReceiptOperationalCurrencyAmount' })
  receiptOperationalCurrencyAmount: number;

  @Column({ type: 'character varying', name: 'ReceiptDepositNumber', nullable: true })
  receiptDepositNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ReceiptDepositDate', nullable: true })
  receiptDepositDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'DestinationPettyCashRef', nullable: true })
  destinationPettyCashRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'BankFee', nullable: true })
  bankFee: number | null;

}