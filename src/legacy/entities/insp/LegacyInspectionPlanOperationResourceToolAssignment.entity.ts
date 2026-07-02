import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionPlanOperationResourceToolAssignment' })
export class LegacyInspectionPlanOperationResourceToolAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionPlanOperationResourceToolAssignmentID' })
  inspectionPlanOperationResourceToolAssignmentID: number;

  @Column({ type: 'bigint', name: 'InspectionPlanOperationRef' })
  inspectionPlanOperationRef: number;

  @Column({ type: 'bigint', name: 'InspectionPlanOperationCharacteristicRef', nullable: true })
  inspectionPlanOperationCharacteristicRef: number | null;

  @Column({ type: 'bigint', name: 'ResourceToolRef', nullable: true })
  resourceToolRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'numeric', name: 'StartOffset', nullable: true })
  startOffset: number | null;

  @Column({ type: 'bigint', name: 'StartOffsetUnitRef', nullable: true })
  startOffsetUnitRef: number | null;

  @Column({ type: 'numeric', name: 'EndOffset', nullable: true })
  endOffset: number | null;

  @Column({ type: 'bigint', name: 'EndOffsetUnitRef', nullable: true })
  endOffsetUnitRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}