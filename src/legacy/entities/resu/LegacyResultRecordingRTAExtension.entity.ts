import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ResultRecordingRTAExtension' })
export class LegacyResultRecordingRTAExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ResultRecordingRTAExtensionID' })
  resultRecordingRTAExtensionID: number;

  @Column({ type: 'bigint', name: 'ResultRecordingResourceToolAssignmentRef' })
  resultRecordingResourceToolAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}