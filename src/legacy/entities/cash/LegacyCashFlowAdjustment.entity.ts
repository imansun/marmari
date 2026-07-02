import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CashFlowAdjustment' })
export class LegacyCashFlowAdjustment {
  @PrimaryColumn({ type: 'bigint', name: 'CashFlowAdjustmentID' })
  cashFlowAdjustmentID: number;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}