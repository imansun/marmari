import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SupplierAssessmentItem' })
export class LegacySupplierAssessmentItem {
  @PrimaryColumn({ type: 'bigint', name: 'SupplierAssessmentItemID' })
  supplierAssessmentItemID: number;

  @Column({ type: 'bigint', name: 'SupplierAssessmentRef' })
  supplierAssessmentRef: number;

  @Column({ type: 'bigint', name: 'SupplierAssessmentParameterRef' })
  supplierAssessmentParameterRef: number;

  @Column({ type: 'numeric', name: 'Weight' })
  weight: number;

  @Column({ type: 'numeric', name: 'Point' })
  point: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}