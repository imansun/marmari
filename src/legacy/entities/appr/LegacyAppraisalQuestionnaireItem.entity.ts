import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalQuestionnaireItem' })
export class LegacyAppraisalQuestionnaireItem {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalQuestionnaireItemID' })
  appraisalQuestionnaireItemID: number;

  @Column({ type: 'bigint', name: 'AppraisalQuestionnaireRef' })
  appraisalQuestionnaireRef: number;

  @Column({ type: 'bigint', name: 'AppraisalPatternItemRef' })
  appraisalPatternItemRef: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'AgreedIndicatorRef', nullable: true })
  agreedIndicatorRef: number | null;

  @Column({ type: 'bigint', name: 'ExpectationRef', nullable: true })
  expectationRef: number | null;

  @Column({ type: 'boolean', name: 'IsIndicatorless' })
  isIndicatorless: boolean;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}