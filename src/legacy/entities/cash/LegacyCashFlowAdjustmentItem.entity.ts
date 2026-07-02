import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CashFlowAdjustmentItem' })
export class LegacyCashFlowAdjustmentItem {
  @PrimaryColumn({ type: 'bigint', name: 'CashFlowAdjustmentItemID' })
  cashFlowAdjustmentItemID: number;

  @Column({ type: 'bigint', name: 'CashFlowAdjustmentRef' })
  cashFlowAdjustmentRef: number;

  @Column({ type: 'bigint', name: 'TopicRef', nullable: true })
  topicRef: number | null;

  @Column({ type: 'numeric', name: 'AdjustmentAmount', nullable: true })
  adjustmentAmount: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}