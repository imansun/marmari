import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionOperationRTAExtension' })
export class LegacyInspectionOperationRTAExtension {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionOperationRTAExtensionID' })
  inspectionOperationRTAExtensionID: number;

  @Column({ type: 'bigint', name: 'InspectionOperationResourceToolAssignmentRef' })
  inspectionOperationResourceToolAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}