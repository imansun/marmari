import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceSummaryPatternSettlement' })
export class LegacyPerformanceSummaryPatternSettlement {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceSummaryPatternSettlementID' })
  performanceSummaryPatternSettlementID: number;

  @Column({ type: 'bigint', name: 'PerformanceSummaryPatternRef' })
  performanceSummaryPatternRef: number;

  @Column({ type: 'boolean', name: 'CashierParam' })
  cashierParam: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}