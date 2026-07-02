import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceSummaryPatternSales' })
export class LegacyPerformanceSummaryPatternSales {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceSummaryPatternSalesID' })
  performanceSummaryPatternSalesID: number;

  @Column({ type: 'bigint', name: 'PerformanceSummaryPatternRef' })
  performanceSummaryPatternRef: number;

  @Column({ type: 'boolean', name: 'CashierParam' })
  cashierParam: boolean;

  @Column({ type: 'boolean', name: 'CustomerParam' })
  customerParam: boolean;

  @Column({ type: 'boolean', name: 'ProductParam' })
  productParam: boolean;

  @Column({ type: 'boolean', name: 'DocumentPatternParam' })
  documentPatternParam: boolean;

  @Column({ type: 'boolean', name: 'PolicyParam' })
  policyParam: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'SalesAreaParam' })
  salesAreaParam: boolean;

}