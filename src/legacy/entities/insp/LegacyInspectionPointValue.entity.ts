import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionPointValue' })
export class LegacyInspectionPointValue {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionPointValueID' })
  inspectionPointValueID: number;

  @Column({ type: 'bigint', name: 'InspectionPointRef', nullable: true })
  inspectionPointRef: number | null;

  @Column({ type: 'bigint', name: 'InspectionLotOperationRef' })
  inspectionLotOperationRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Value', nullable: true })
  value: number | null;

  @Column({ type: 'boolean', name: 'IsManual' })
  isManual: boolean;

  @Column({ type: 'bigint', name: 'InspectionDocumentRulesEvaluationRef', nullable: true })
  inspectionDocumentRulesEvaluationRef: number | null;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

}