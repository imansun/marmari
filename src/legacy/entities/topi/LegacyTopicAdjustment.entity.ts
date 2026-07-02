import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TopicAdjustment' })
export class LegacyTopicAdjustment {
  @PrimaryColumn({ type: 'bigint', name: 'TopicAdjustmentID' })
  topicAdjustmentID: number;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'numeric', name: 'Value', nullable: true })
  value: number | null;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'numeric', name: 'TempValue', nullable: true })
  tempValue: number | null;

  @Column({ type: 'integer', name: 'TempNature', nullable: true })
  tempNature: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}