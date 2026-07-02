import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ModularTopicInfo' })
export class LegacyModularTopicInfo {
  @PrimaryColumn({ type: 'bigint', name: 'ModularTopicInfoID' })
  modularTopicInfoID: number;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}