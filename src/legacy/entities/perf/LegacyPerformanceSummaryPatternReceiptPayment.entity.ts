import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceSummaryPatternReceiptPayment' })
export class LegacyPerformanceSummaryPatternReceiptPayment {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceSummaryPatternReceiptPaymentID' })
  performanceSummaryPatternReceiptPaymentID: number;

  @Column({ type: 'bigint', name: 'PerformanceSummaryPatternRef' })
  performanceSummaryPatternRef: number;

  @Column({ type: 'boolean', name: 'CashierParam' })
  cashierParam: boolean;

  @Column({ type: 'boolean', name: 'CustomerParam' })
  customerParam: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}