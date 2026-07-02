import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentDeliverRestorePayableNote' })
export class LegacyPaymentDeliverRestorePayableNote {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentDeliverRestorePayableNoteID' })
  paymentDeliverRestorePayableNoteID: number;

  @Column({ type: 'bigint', name: 'PayableNoteRef' })
  payableNoteRef: number;

  @Column({ type: 'bigint', name: 'PaymentRef' })
  paymentRef: number;

  @Column({ type: 'bigint', name: 'PayableNoteTransactionRef' })
  payableNoteTransactionRef: number;

  @Column({ type: 'bigint', name: 'AccountingOperationRef', nullable: true })
  accountingOperationRef: number | null;

  @Column({ type: 'bigint', name: 'AccountRef', nullable: true })
  accountRef: number | null;

  @Column({ type: 'bigint', name: 'CounterPartRef' })
  counterPartRef: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyAmount' })
  operationalCurrencyAmount: number;

  @Column({ type: 'bigint', name: 'BaseCurrencyRef' })
  baseCurrencyRef: number;

  @Column({ type: 'numeric', name: 'BaseCurrencyExchangeRate' })
  baseCurrencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'BaseCurrencyExchangeRateRef', nullable: true })
  baseCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'BaseCurrencyAmount' })
  baseCurrencyAmount: number;

  @Column({ type: 'timestamp without time zone', name: 'DueDate', nullable: true })
  dueDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'AgreementDate', nullable: true })
  agreementDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'CashFlowFactorRef', nullable: true })
  cashFlowFactorRef: number | null;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}