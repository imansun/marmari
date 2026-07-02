import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DefectRecordingReason' })
export class LegacyDefectRecordingReason {
  @PrimaryColumn({ type: 'bigint', name: 'DefectRecordingReasonID' })
  defectRecordingReasonID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'DefectRecordingRef' })
  defectRecordingRef: number;

  @Column({ type: 'bigint', name: 'DefectReasonRef' })
  defectReasonRef: number;

}