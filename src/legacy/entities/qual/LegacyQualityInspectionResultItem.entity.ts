import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'QualityInspectionResultItem' })
export class LegacyQualityInspectionResultItem {
  @PrimaryColumn({ type: 'bigint', name: 'QualityInspectionResultItemID' })
  qualityInspectionResultItemID: number;

  @Column({ type: 'bigint', name: 'QualityInspectionResultRef' })
  qualityInspectionResultRef: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'VoucherCreationDate' })
  voucherCreationDate: Date;

  @Column({ type: 'character varying', name: 'TestNumber', nullable: true })
  testNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'TestDate', nullable: true })
  testDate: Date | null;

  @Column({ type: 'numeric', name: 'ApprovedQuantity', nullable: true })
  approvedQuantity: number | null;

  @Column({ type: 'numeric', name: 'RejectedQuantity', nullable: true })
  rejectedQuantity: number | null;

  @Column({ type: 'numeric', name: 'MajorUnitApprovedQuantity', nullable: true })
  majorUnitApprovedQuantity: number | null;

  @Column({ type: 'numeric', name: 'MajorUnitRejectedQuantity', nullable: true })
  majorUnitRejectedQuantity: number | null;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

}