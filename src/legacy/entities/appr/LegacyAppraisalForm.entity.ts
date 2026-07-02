import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalForm' })
export class LegacyAppraisalForm {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalFormID' })
  appraisalFormID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'boolean', name: 'HasAccept' })
  hasAccept: boolean;

  @Column({ type: 'boolean', name: 'VisibleToAppraisee' })
  visibleToAppraisee: boolean;

  @Column({ type: 'bigint', name: 'AppraisalDistributionRef' })
  appraisalDistributionRef: number;

  @Column({ type: 'bigint', name: 'AppraisalFormTemplateRef' })
  appraisalFormTemplateRef: number;

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

  @Column({ type: 'integer', name: 'SubType', default: 1 })
  subType: number;

}