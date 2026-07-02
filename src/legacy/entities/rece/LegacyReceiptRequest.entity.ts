import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReceiptRequest' })
export class LegacyReceiptRequest {
  @PrimaryColumn({ type: 'bigint', name: 'ReceiptRequestID' })
  receiptRequestID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'SettlementDate', nullable: true })
  settlementDate: Date | null;

  @Column({ type: 'bigint', name: 'CounterPartRef' })
  counterPartRef: number;

  @Column({ type: 'bigint', name: 'AccountRef', nullable: true })
  accountRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'character varying', name: 'ReferenceNumber', nullable: true })
  referenceNumber: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Approver', nullable: true })
  approver: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'ReceiptType', nullable: true })
  receiptType: number | null;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'LastModifierInTemporaryRegistration' })
  lastModifierInTemporaryRegistration: number;

}