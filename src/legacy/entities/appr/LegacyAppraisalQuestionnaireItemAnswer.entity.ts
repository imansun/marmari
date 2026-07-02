import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalQuestionnaireItemAnswer' })
export class LegacyAppraisalQuestionnaireItemAnswer {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalQuestionnaireItemAnswerID' })
  appraisalQuestionnaireItemAnswerID: number;

  @Column({ type: 'bigint', name: 'AppraisalQuestionnaireItemRef' })
  appraisalQuestionnaireItemRef: number;

  @Column({ type: 'bigint', name: 'IndicatorAnswerStructureItemRef', nullable: true })
  indicatorAnswerStructureItemRef: number | null;

  @Column({ type: 'boolean', name: 'Checked', nullable: true })
  checked: boolean | null;

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