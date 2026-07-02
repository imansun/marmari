import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ElectronicLegalReport' })
export class LegacyElectronicLegalReport {
  @PrimaryColumn({ type: 'bigint', name: 'ElectronicLegalReportID' })
  electronicLegalReportID: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint' })
  ledgerFiscalYearRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'TrackingCode', nullable: true })
  trackingCode: string | null;

  @Column({ type: 'boolean', name: 'IsAggregate' })
  isAggregate: boolean;

  @Column({ type: 'boolean', name: 'AggregateSeparatOpeningDocument', default: false })
  aggregateSeparatOpeningDocument: boolean;

  @Column({ type: 'boolean', name: 'AggregateSeparatClosingDocument', default: false })
  aggregateSeparatClosingDocument: boolean;

  @Column({ type: 'boolean', name: 'AggregateSeparatAccountClosingDocument', default: false })
  aggregateSeparatAccountClosingDocument: boolean;

  @Column({ type: 'date', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'date', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'boolean', name: 'IncludeDescription' })
  includeDescription: boolean;

  @Column({ type: 'boolean', name: 'IncludeSubAccountTitle' })
  includeSubAccountTitle: boolean;

  @Column({ type: 'boolean', name: 'IncludeSubAccountCode' })
  includeSubAccountCode: boolean;

  @Column({ type: 'character varying', name: 'VoucherStates' })
  voucherStates: string;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate', nullable: true })
  lastModificationDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'AggregateSeparatResidentialOpeningDocument', default: false })
  aggregateSeparatResidentialOpeningDocument: boolean;

}