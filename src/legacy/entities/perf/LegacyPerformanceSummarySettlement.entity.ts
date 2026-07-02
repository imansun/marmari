import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceSummarySettlement' })
export class LegacyPerformanceSummarySettlement {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceSummarySettlementID' })
  performanceSummarySettlementID: number;

  @Column({ type: 'bigint', name: 'PerformanceSummaryRef' })
  performanceSummaryRef: number;

  @Column({ type: 'bigint', name: 'ManagerRef', nullable: true })
  managerRef: number | null;

  @Column({ type: 'bigint', name: 'SupervisorRef', nullable: true })
  supervisorRef: number | null;

  @Column({ type: 'bigint', name: 'CashierRef', nullable: true })
  cashierRef: number | null;

  @Column({ type: 'character varying', name: 'NatureKey' })
  natureKey: string;

  @Column({ type: 'numeric', name: 'ReceivedAmount' })
  receivedAmount: number;

  @Column({ type: 'numeric', name: 'PaidAmount' })
  paidAmount: number;

  @Column({ type: 'numeric', name: 'DeficitAmount' })
  deficitAmount: number;

  @Column({ type: 'bigint', name: 'PerformanceSummaryPatternSettlementRef' })
  performanceSummaryPatternSettlementRef: number;

  @Column({ type: 'numeric', name: 'SurplusAmount' })
  surplusAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}