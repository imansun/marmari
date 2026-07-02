import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerDataLog' })
export class LegacyTaxPayerDataLog {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerDataLogID' })
  taxPayerDataLogID: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ReferenceDate' })
  referenceDate: Date;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'IgnoredForTaxPayerDataLogRef', nullable: true })
  ignoredForTaxPayerDataLogRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ProcessingDate', nullable: true })
  processingDate: Date | null;

  @Column({ type: 'integer', name: 'FinalActionType', nullable: true })
  finalActionType: number | null;

  @Column({ type: 'character varying', name: 'UniqueTaxRef', nullable: true })
  uniqueTaxRef: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'RelatedReferenceRef', nullable: true })
  relatedReferenceRef: number | null;

  @Column({ type: 'integer', name: 'RelatedReferenceType', nullable: true })
  relatedReferenceType: number | null;

  @Column({ type: 'integer', name: 'RelatedActionType', nullable: true })
  relatedActionType: number | null;

}