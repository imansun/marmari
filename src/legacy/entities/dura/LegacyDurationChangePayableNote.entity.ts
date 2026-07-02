import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DurationChangePayableNote' })
export class LegacyDurationChangePayableNote {
  @PrimaryColumn({ type: 'bigint', name: 'DurationChangePayableNoteID' })
  durationChangePayableNoteID: number;

  @Column({ type: 'bigint', name: 'DurationChangeRef' })
  durationChangeRef: number;

  @Column({ type: 'bigint', name: 'AccountingOperationRef', nullable: true })
  accountingOperationRef: number | null;

  @Column({ type: 'bigint', name: 'PayableNoteRef' })
  payableNoteRef: number;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DueDate' })
  dueDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'AgreementDate' })
  agreementDate: Date;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'bigint', name: 'PayableNoteTransactionRef' })
  payableNoteTransactionRef: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyAmount' })
  operationalCurrencyAmount: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'BaseCurrencyExchangeRate' })
  baseCurrencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'BaseCurrencyExchangeRateRef', nullable: true })
  baseCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'BaseCurrencyAmount' })
  baseCurrencyAmount: number;

  @Column({ type: 'bigint', name: 'BaseCurrencyRef' })
  baseCurrencyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'SourceType', nullable: true })
  sourceType: number | null;

  @Column({ type: 'bigint', name: 'SourceRef', nullable: true })
  sourceRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

}