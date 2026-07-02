import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionLotOperationRTAExtension' })
export class LegacyInspectionLotOperationRTAExtension {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionLotOperationRTAExtensionID' })
  inspectionLotOperationRTAExtensionID: number;

  @Column({ type: 'bigint', name: 'InspectionLotOperationResourceToolAssignmentRef' })
  inspectionLotOperationResourceToolAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}