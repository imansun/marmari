import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AdjustmentClassification' })
export class LegacyAdjustmentClassification {
  @PrimaryColumn({ type: 'bigint', name: 'AdjustmentClassificationID' })
  adjustmentClassificationID: number;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}