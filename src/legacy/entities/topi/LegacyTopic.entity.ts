import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Topic' })
export class LegacyTopic {
  @PrimaryColumn({ type: 'bigint', name: 'TopicID' })
  topicID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'integer', name: 'CalculationType' })
  calculationType: number;

  @Column({ type: 'integer', name: 'CalculationSourceType' })
  calculationSourceType: number;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'boolean', name: 'AmountFeature' })
  amountFeature: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'ModuleKey', nullable: true })
  moduleKey: string | null;

  @Column({ type: 'boolean', name: 'IsPriorYearAdjustment' })
  isPriorYearAdjustment: boolean;

  @Column({ type: 'boolean', name: 'IsCashFlowAdjustment' })
  isCashFlowAdjustment: boolean;

  @Column({ type: 'boolean', name: 'IsWriteOffStatement' })
  isWriteOffStatement: boolean;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}