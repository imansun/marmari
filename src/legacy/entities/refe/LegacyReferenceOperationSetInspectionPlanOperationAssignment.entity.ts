import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferenceOperationSetInspectionPlanOperationAssignment' })
export class LegacyReferenceOperationSetInspectionPlanOperationAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'ReferenceOperationSetInspectionPlanOperationAssignmentID' })
  referenceOperationSetInspectionPlanOperationAssignmentID: number;

  @Column({ type: 'bigint', name: 'ReferenceOperationSetInspectionPlanAssignmentRef' })
  referenceOperationSetInspectionPlanAssignmentRef: number;

  @Column({ type: 'bigint', name: 'InspectionPlanOperationRef' })
  inspectionPlanOperationRef: number;

  @Column({ type: 'bigint', name: 'ReferenceOperationRef' })
  referenceOperationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}