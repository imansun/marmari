import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AcquisitionReceipt' })
export class LegacyAcquisitionReceipt {
  @PrimaryColumn({ type: 'bigint', name: 'AcquisitionReceiptID' })
  acquisitionReceiptID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate', nullable: true })
  currencyExchangeRate: number | null;

  @Column({ type: 'integer', name: 'AcquisitionType' })
  acquisitionType: number;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'integer', name: 'SourceType', nullable: true })
  sourceType: number | null;

  @Column({ type: 'bigint', name: 'SourceRef', nullable: true })
  sourceRef: number | null;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'integer', name: 'DealType' })
  dealType: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'character varying', name: 'ReferenceNumber', nullable: true })
  referenceNumber: string | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'RegisteredWithMobile', default: false })
  registeredWithMobile: boolean;

}