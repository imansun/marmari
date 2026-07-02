import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportTopic' })
export class LegacyReportTopic {
  @PrimaryColumn({ type: 'bigint', name: 'ReportTopicID' })
  reportTopicID: number;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'integer', name: 'CalculationType' })
  calculationType: number;

  @Column({ type: 'integer', name: 'CalculationSourceType', nullable: true })
  calculationSourceType: number | null;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'boolean', name: 'AmountFeature' })
  amountFeature: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'TopicID' })
  topicID: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'boolean', name: 'IsCashFlowAdjustment' })
  isCashFlowAdjustment: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}