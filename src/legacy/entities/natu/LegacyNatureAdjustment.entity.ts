import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NatureAdjustment' })
export class LegacyNatureAdjustment {
  @PrimaryColumn({ type: 'bigint', name: 'NatureAdjustmentID' })
  natureAdjustmentID: number;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}