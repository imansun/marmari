import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalQuestionnaire' })
export class LegacyAppraisalQuestionnaire {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalQuestionnaireID' })
  appraisalQuestionnaireID: number;

  @Column({ type: 'bigint', name: 'PeriodEvaluationStepTypeRef' })
  periodEvaluationStepTypeRef: number;

  @Column({ type: 'bigint', name: 'AppraiseeRef' })
  appraiseeRef: number;

  @Column({ type: 'bigint', name: 'AppraiserRef' })
  appraiserRef: number;

  @Column({ type: 'bigint', name: 'PerformancePeriodRef' })
  performancePeriodRef: number;

  @Column({ type: 'bigint', name: 'AppraisalPatternRef' })
  appraisalPatternRef: number;

  @Column({ type: 'integer', name: 'AppraisalDimension' })
  appraisalDimension: number;

  @Column({ type: 'uuid', name: 'DistributionUniqueId', nullable: true })
  distributionUniqueId: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DistributionDate', nullable: true })
  distributionDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'numeric', name: 'NumericFinalScore', nullable: true })
  numericFinalScore: number | null;

  @Column({ type: 'character varying', name: 'TextFinalScore', nullable: true })
  textFinalScore: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmationDate', nullable: true })
  confirmationDate: Date | null;

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