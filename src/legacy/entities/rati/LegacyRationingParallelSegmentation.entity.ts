import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationingParallelSegmentation' })
export class LegacyRationingParallelSegmentation {
  @PrimaryColumn({ type: 'bigint', name: 'RationingParallelSegmentationID' })
  rationingParallelSegmentationID: number;

  @Column({ type: 'bigint', name: 'RationingSettingRef' })
  rationingSettingRef: number;

  @Column({ type: 'bigint', name: 'ParentSegmentationRef', nullable: true })
  parentSegmentationRef: number | null;

  @Column({ type: 'character varying', name: 'SegmentationTitle' })
  segmentationTitle: string;

  @Column({ type: 'bigint', name: 'BusinessPolicyParameterRef', nullable: true })
  businessPolicyParameterRef: number | null;

  @Column({ type: 'integer', name: 'RationType' })
  rationType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}