import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionLotOperation' })
export class LegacyInspectionLotOperation {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionLotOperationID' })
  inspectionLotOperationID: number;

  @Column({ type: 'bigint', name: 'InspectionLotRef' })
  inspectionLotRef: number;

  @Column({ type: 'bigint', name: 'InspectionPlanOperationUniqueID' })
  inspectionPlanOperationUniqueID: number;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'bigint', name: 'InspectionPointRef', nullable: true })
  inspectionPointRef: number | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'DescriptionFromPlan', nullable: true })
  descriptionFromPlan: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'InspectionDocumentRulesEvaluationRef', nullable: true })
  inspectionDocumentRulesEvaluationRef: number | null;

}