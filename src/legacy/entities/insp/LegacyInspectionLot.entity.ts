import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionLot' })
export class LegacyInspectionLot {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionLotID' })
  inspectionLotID: number;

  @Column({ type: 'smallint', name: 'InspectionDocumentType' })
  inspectionDocumentType: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'LotSize', nullable: true })
  lotSize: number | null;

  @Column({ type: 'bigint', name: 'PartUnitRef', nullable: true })
  partUnitRef: number | null;

  @Column({ type: 'bigint', name: 'InspectionPlanRef', nullable: true })
  inspectionPlanRef: number | null;

  @Column({ type: 'bigint', name: 'QualityInspectionResultRef', nullable: true })
  qualityInspectionResultRef: number | null;

  @Column({ type: 'integer', name: 'InspectionLevel', nullable: true })
  inspectionLevel: number | null;

  @Column({ type: 'numeric', name: 'AcceptedValue', nullable: true })
  acceptedValue: number | null;

  @Column({ type: 'numeric', name: 'RejectedValue', nullable: true })
  rejectedValue: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'ReferenceItemRef', nullable: true })
  referenceItemRef: number | null;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'NeedsRetest', default: false })
  needsRetest: boolean;

  @Column({ type: 'numeric', name: 'SampleValue', nullable: true })
  sampleValue: number | null;

  @Column({ type: 'bigint', name: 'SamplePartUnitRef', nullable: true })
  samplePartUnitRef: number | null;

  @Column({ type: 'bigint', name: 'InspectionDocumentRulesEvaluationRef', nullable: true })
  inspectionDocumentRulesEvaluationRef: number | null;

}