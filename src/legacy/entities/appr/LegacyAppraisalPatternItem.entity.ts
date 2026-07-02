import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalPatternItem' })
export class LegacyAppraisalPatternItem {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalPatternItemID' })
  appraisalPatternItemID: number;

  @Column({ type: 'bigint', name: 'AppraisalPatternRef' })
  appraisalPatternRef: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

  @Column({ type: 'bigint', name: 'IndicatorRef', nullable: true })
  indicatorRef: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'integer', name: 'ReturnType', nullable: true })
  returnType: number | null;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'boolean', name: 'VisibleToAppraisee', nullable: true })
  visibleToAppraisee: boolean | null;

  @Column({ type: 'boolean', name: 'AppraiseeCanComment', nullable: true })
  appraiseeCanComment: boolean | null;

  @Column({ type: 'boolean', name: 'AppraiseeMustComment', nullable: true })
  appraiseeMustComment: boolean | null;

  @Column({ type: 'boolean', name: 'AppraiserCanComment', nullable: true })
  appraiserCanComment: boolean | null;

  @Column({ type: 'boolean', name: 'AppraiserMustComment', nullable: true })
  appraiserMustComment: boolean | null;

  @Column({ type: 'boolean', name: 'CanChangeByManager', nullable: true })
  canChangeByManager: boolean | null;

  @Column({ type: 'boolean', name: 'FinalResult' })
  finalResult: boolean;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}