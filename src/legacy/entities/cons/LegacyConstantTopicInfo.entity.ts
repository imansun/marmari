import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConstantTopicInfo' })
export class LegacyConstantTopicInfo {
  @PrimaryColumn({ type: 'bigint', name: 'ConstantTopicInfoID' })
  constantTopicInfoID: number;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'numeric', name: 'TempAmount', nullable: true })
  tempAmount: number | null;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'integer', name: 'TempNature', nullable: true })
  tempNature: number | null;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}