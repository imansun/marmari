import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountReview' })
export class LegacyAccountReview {
  @PrimaryColumn({ type: 'bigint', name: 'TransactionRef' })
  transactionRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'AccountRef' })
  accountRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'BranchRef' })
  branchRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @PrimaryColumn({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @PrimaryColumn({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number;

  @PrimaryColumn({ type: 'boolean', name: 'OperationalCurrencyExchangeRateIsReverse' })
  operationalCurrencyExchangeRateIsReverse: boolean;

  @PrimaryColumn({ type: 'numeric', name: 'TransactionDebitAmount' })
  transactionDebitAmount: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'TransactionCreditAmount' })
  transactionCreditAmount: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'TransactionIsCredit' })
  transactionIsCredit: boolean | null;

  @PrimaryColumn({ type: 'character varying', name: 'TransactionReviewType' })
  transactionReviewType: string | null;

  @PrimaryColumn({ type: 'numeric', name: 'ReceiptItemAmount' })
  receiptItemAmount: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'ReceivableChequeId' })
  receivableChequeId: number | null;

  @PrimaryColumn({ type: 'integer', name: 'ReceiptItemType' })
  receiptItemType: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'InvoiceDate' })
  invoiceDate: Date | null;

  @PrimaryColumn({ type: 'numeric', name: 'InvoiceNetPrice' })
  invoiceNetPrice: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'InvoiceSettledAmount' })
  invoiceSettledAmount: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'InvoiceUnSettledAmount' })
  invoiceUnSettledAmount: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'InvoiceNotDefinitePayedAmount' })
  invoiceNotDefinitePayedAmount: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'TransactionOperationalCurrencyDebitAmount' })
  transactionOperationalCurrencyDebitAmount: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'TransactionOperationalCurrencyCreditAmount' })
  transactionOperationalCurrencyCreditAmount: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'ReceiptItemOperationalCurrencyAmount' })
  receiptItemOperationalCurrencyAmount: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'InvoiceOperationalCurrencyNetPrice' })
  invoiceOperationalCurrencyNetPrice: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'InvoiceOperationalCurrencySettledAmount' })
  invoiceOperationalCurrencySettledAmount: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'InvoiceOperationalCurrencyUnSettledAmount' })
  invoiceOperationalCurrencyUnSettledAmount: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'InvoiceOperationalCurrencyNotDefinitePayedAmount' })
  invoiceOperationalCurrencyNotDefinitePayedAmount: number | null;

}