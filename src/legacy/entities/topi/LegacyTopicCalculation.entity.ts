import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TopicCalculation' })
export class LegacyTopicCalculation {
  @PrimaryColumn({ type: 'bigint', name: 'TopicCalculationID' })
  topicCalculationID: number;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'numeric', name: 'InitialAmount', nullable: true })
  initialAmount: number | null;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount1', nullable: true })
  comparativeAmount1: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount2', nullable: true })
  comparativeAmount2: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount3', nullable: true })
  comparativeAmount3: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount4', nullable: true })
  comparativeAmount4: number | null;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'integer', name: 'TopicNature' })
  topicNature: number;

  @Column({ type: 'integer', name: 'TopicCalculationSourceType' })
  topicCalculationSourceType: number;

  @Column({ type: 'integer', name: 'TopicCalculationType' })
  topicCalculationType: number;

  @Column({ type: 'numeric', name: 'CashFlowAdjustment', nullable: true })
  cashFlowAdjustment: number | null;

  @Column({ type: 'numeric', name: 'AdjustmentClassification', nullable: true })
  adjustmentClassification: number | null;

  @Column({ type: 'numeric', name: 'PriorYearAdjustment', nullable: true })
  priorYearAdjustment: number | null;

  @Column({ type: 'numeric', name: 'NatureAdjustment', nullable: true })
  natureAdjustment: number | null;

  @Column({ type: 'numeric', name: 'WriteOffAdjustment', nullable: true })
  writeOffAdjustment: number | null;

  @Column({ type: 'numeric', name: 'CurrentBalanceWithoutCashFlow', nullable: true })
  currentBalanceWithoutCashFlow: number | null;

  @Column({ type: 'numeric', name: 'PreviousBalanceWithoutCashFlow', nullable: true })
  previousBalanceWithoutCashFlow: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}