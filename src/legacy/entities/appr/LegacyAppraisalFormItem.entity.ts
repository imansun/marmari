import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalFormItem' })
export class LegacyAppraisalFormItem {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalFormItemID' })
  appraisalFormItemID: number;

  @Column({ type: 'bigint', name: 'AppraisalFormTemplateItemRef' })
  appraisalFormTemplateItemRef: number;

  @Column({ type: 'bigint', name: 'AppraisalFormRef' })
  appraisalFormRef: number;

  @Column({ type: 'bigint', name: 'PhraseRef', nullable: true })
  phraseRef: number | null;

  @Column({ type: 'bigint', name: 'AnswerTemplateRef', nullable: true })
  answerTemplateRef: number | null;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

  @Column({ type: 'integer', name: 'ScoringMethod', nullable: true })
  scoringMethod: number | null;

  @Column({ type: 'integer', name: 'AnsweringMethod', nullable: true })
  answeringMethod: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'AnswerType', nullable: true })
  answerType: number | null;

  @Column({ type: 'integer', name: 'InputType', nullable: true })
  inputType: number | null;

  @Column({ type: 'integer', name: 'ReturnType', nullable: true })
  returnType: number | null;

  @Column({ type: 'boolean', name: 'IsRequired' })
  isRequired: boolean;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'numeric', name: 'MinScore', nullable: true })
  minScore: number | null;

  @Column({ type: 'numeric', name: 'MaxScore', nullable: true })
  maxScore: number | null;

  @Column({ type: 'numeric', name: 'Coefficient', nullable: true })
  coefficient: number | null;

  @Column({ type: 'numeric', name: 'PhraseGroupCoefficient', nullable: true })
  phraseGroupCoefficient: number | null;

  @Column({ type: 'character varying', name: 'PhraseName', nullable: true })
  phraseName: string | null;

  @Column({ type: 'boolean', name: 'VisibleToAppraisee' })
  visibleToAppraisee: boolean;

  @Column({ type: 'boolean', name: 'IsAppraiseeDescriptionRequired' })
  isAppraiseeDescriptionRequired: boolean;

  @Column({ type: 'boolean', name: 'FinalResult' })
  finalResult: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsAppraiserDescriptionRequired', default: false })
  isAppraiserDescriptionRequired: boolean;

}