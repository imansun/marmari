import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourReceiptMoneyInfo' })
export class LegacyTourReceiptMoneyInfo {
  @PrimaryColumn({ type: 'bigint', name: 'TourReceiptMoneyInfoID' })
  tourReceiptMoneyInfoID: number;

  @Column({ type: 'bigint', name: 'TourRef' })
  tourRef: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'InvoiceRef', nullable: true })
  invoiceRef: number | null;

  @Column({ type: 'numeric', name: 'ReceivedCashAmount', nullable: true })
  receivedCashAmount: number | null;

  @Column({ type: 'numeric', name: 'ReceivedChequeAmount', nullable: true })
  receivedChequeAmount: number | null;

  @Column({ type: 'bigint', name: 'ReceiptReceivableNoteRef', nullable: true })
  receiptReceivableNoteRef: number | null;

  @Column({ type: 'character varying', name: 'ReceiptReceivableChequeNumber', nullable: true })
  receiptReceivableChequeNumber: string | null;

  @Column({ type: 'numeric', name: 'ReceivedReceiptDepositAmount', nullable: true })
  receivedReceiptDepositAmount: number | null;

  @Column({ type: 'bigint', name: 'ReceiptDepositRef', nullable: true })
  receiptDepositRef: number | null;

  @Column({ type: 'character varying', name: 'ReceiptDepositNumber', nullable: true })
  receiptDepositNumber: string | null;

  @Column({ type: 'numeric', name: 'ReceivableAmount', nullable: true })
  receivableAmount: number | null;

  @Column({ type: 'boolean', name: 'IsUnScheduled', nullable: true })
  isUnScheduled: boolean | null;

  @Column({ type: 'bigint', name: 'PayerPartyRef', nullable: true })
  payerPartyRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'boolean', name: 'SentFromHandheld' })
  sentFromHandheld: boolean;

  @Column({ type: 'timestamp without time zone', name: 'HandheldCreationDate', nullable: true })
  handheldCreationDate: Date | null;

  @Column({ type: 'character varying', name: 'Latitude', nullable: true })
  latitude: string | null;

  @Column({ type: 'character varying', name: 'Longitude', nullable: true })
  longitude: string | null;

  @Column({ type: 'integer', name: 'Provider', nullable: true })
  provider: number | null;

  @Column({ type: 'numeric', name: 'Accuracy', nullable: true })
  accuracy: number | null;

  @Column({ type: 'bigint', name: 'ReceivedChequeBankRef', nullable: true })
  receivedChequeBankRef: number | null;

  @Column({ type: 'character varying', name: 'ReceivedChequeBankBranch', nullable: true })
  receivedChequeBankBranch: string | null;

  @Column({ type: 'character varying', name: 'ReceivedChequeBankBranchCode', nullable: true })
  receivedChequeBankBranchCode: string | null;

  @Column({ type: 'character varying', name: 'ReceivedChequeAccountNumber', nullable: true })
  receivedChequeAccountNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ReceivedChequeDueDate', nullable: true })
  receivedChequeDueDate: Date | null;

  @Column({ type: 'character varying', name: 'ReceivedItemDescription', nullable: true })
  receivedItemDescription: string | null;

  @Column({ type: 'bigint', name: 'UnexecutedActivityReasonRef', nullable: true })
  unexecutedActivityReasonRef: number | null;

  @Column({ type: 'character varying', name: 'UnexecutedActivityReasonDescription', nullable: true })
  unexecutedActivityReasonDescription: string | null;

  @Column({ type: 'timestamp without time zone', name: 'HandheldUnexecutedReasonCreationDate', nullable: true })
  handheldUnexecutedReasonCreationDate: Date | null;

  @Column({ type: 'character varying', name: 'HandheldUnexecutedReasonLatitude', nullable: true })
  handheldUnexecutedReasonLatitude: string | null;

  @Column({ type: 'character varying', name: 'HandheldUnexecutedReasonLongitude', nullable: true })
  handheldUnexecutedReasonLongitude: string | null;

  @Column({ type: 'integer', name: 'HandheldUnexecutedReasonProvider', nullable: true })
  handheldUnexecutedReasonProvider: number | null;

  @Column({ type: 'numeric', name: 'HandheldUnexecutedReasonAccuracy', nullable: true })
  handheldUnexecutedReasonAccuracy: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'ReturnInvoiceAmount', nullable: true })
  returnInvoiceAmount: number | null;

  @Column({ type: 'bigint', name: 'ReturnInvoiceRef', nullable: true })
  returnInvoiceRef: number | null;

  @Column({ type: 'numeric', name: 'SurplusAmount' })
  surplusAmount: number;

  @Column({ type: 'bigint', name: 'PartyBankAccountRef', nullable: true })
  partyBankAccountRef: number | null;

  @Column({ type: 'boolean', name: 'IsOutOfTour' })
  isOutOfTour: boolean;

  @Column({ type: 'character varying', name: 'ReturnInvoiceNumber', nullable: true })
  returnInvoiceNumber: string | null;

  @Column({ type: 'character varying', name: 'ReceivedChequeSayadNumber', nullable: true })
  receivedChequeSayadNumber: string | null;

}