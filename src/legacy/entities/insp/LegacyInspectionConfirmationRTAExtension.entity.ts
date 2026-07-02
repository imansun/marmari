import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationRTAExtension' })
export class LegacyInspectionConfirmationRTAExtension {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationRTAExtensionID' })
  inspectionConfirmationRTAExtensionID: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationResourceToolAssignmentRef' })
  inspectionConfirmationResourceToolAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}