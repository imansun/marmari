import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Transfer' })
export class LegacyTransfer {
  @PrimaryColumn({ type: 'bigint', name: 'TransferID' })
  transferID: number;

  @Column({ type: 'boolean', name: 'IsCurrencyBased' })
  isCurrencyBased: boolean;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'SecondNumber', nullable: true })
  secondNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'PaymentDate' })
  paymentDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ReceiptDate', nullable: true })
  receiptDate: Date | null;

  @Column({ type: 'integer', name: 'TransferType' })
  transferType: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'Payer', nullable: true })
  payer: number | null;

  @Column({ type: 'bigint', name: 'Receipient', nullable: true })
  receipient: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'SourceBranchRef' })
  sourceBranchRef: number;

  @Column({ type: 'bigint', name: 'DestinationBranchRef' })
  destinationBranchRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

  @Column({ type: 'integer', name: 'SourceType', nullable: true })
  sourceType: number | null;

  @Column({ type: 'bigint', name: 'SourceRef', nullable: true })
  sourceRef: number | null;

  @Column({ type: 'bigint', name: 'ReceiptAndPaymentCauseRef', nullable: true })
  receiptAndPaymentCauseRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'LastModifierInTemporaryRegistration' })
  lastModifierInTemporaryRegistration: number;

}