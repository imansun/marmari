import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalFormTemplateExtraField' })
export class LegacyAppraisalFormTemplateExtraField {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalFormTemplateExtraFieldID' })
  appraisalFormTemplateExtraFieldID: number;

  @Column({ type: 'bigint', name: 'AppraisalFormTemplateRef' })
  appraisalFormTemplateRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}