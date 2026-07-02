import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferenceOperationRTAExtension' })
export class LegacyReferenceOperationRTAExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ReferenceOperationRTAExtensionID' })
  referenceOperationRTAExtensionID: number;

  @Column({ type: 'bigint', name: 'ReferenceOperationResourceToolAssignmentRef' })
  referenceOperationResourceToolAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}