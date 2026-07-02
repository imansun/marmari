import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionPlanOperationRTAExtension' })
export class LegacyInspectionPlanOperationRTAExtension {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionPlanOperationRTAExtensionID' })
  inspectionPlanOperationRTAExtensionID: number;

  @Column({ type: 'bigint', name: 'InspectionPlanOperationResourceToolAssignmentRef' })
  inspectionPlanOperationResourceToolAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}