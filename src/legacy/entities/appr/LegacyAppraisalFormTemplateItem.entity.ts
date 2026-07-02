import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalFormTemplateItem' })
export class LegacyAppraisalFormTemplateItem {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalFormTemplateItemID' })
  appraisalFormTemplateItemID: number;

  @Column({ type: 'bigint', name: 'AppraisalFormTemplateRef' })
  appraisalFormTemplateRef: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

  @Column({ type: 'bigint', name: 'AnswerTemplateRef', nullable: true })
  answerTemplateRef: number | null;

  @Column({ type: 'bigint', name: 'PhraseRef', nullable: true })
  phraseRef: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'boolean', name: 'HasReferencePhrase' })
  hasReferencePhrase: boolean;

  @Column({ type: 'boolean', name: 'VisibleToAppraisee' })
  visibleToAppraisee: boolean;

  @Column({ type: 'boolean', name: 'IsAppraiseeDescriptionRequired' })
  isAppraiseeDescriptionRequired: boolean;

  @Column({ type: 'boolean', name: 'FinalResult' })
  finalResult: boolean;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsAppraiserDescriptionRequired', default: false })
  isAppraiserDescriptionRequired: boolean;

}