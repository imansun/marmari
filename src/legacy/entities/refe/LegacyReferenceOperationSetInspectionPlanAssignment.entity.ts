import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferenceOperationSetInspectionPlanAssignment' })
export class LegacyReferenceOperationSetInspectionPlanAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'ReferenceOperationSetInspectionPlanAssignmentID' })
  referenceOperationSetInspectionPlanAssignmentID: number;

  @Column({ type: 'bigint', name: 'ReferenceOperationSetRef' })
  referenceOperationSetRef: number;

  @Column({ type: 'bigint', name: 'InspectionPlanRef' })
  inspectionPlanRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}