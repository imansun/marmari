import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalFormTemplate' })
export class LegacyAppraisalFormTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalFormTemplateID' })
  appraisalFormTemplateID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'boolean', name: 'HasAccept' })
  hasAccept: boolean;

  @Column({ type: 'bigint', name: 'AppraiseeConditionsRef', nullable: true })
  appraiseeConditionsRef: number | null;

  @Column({ type: 'bigint', name: 'AppraiserConditionsRef', nullable: true })
  appraiserConditionsRef: number | null;

  @Column({ type: 'boolean', name: 'VisibleToAppraisee' })
  visibleToAppraisee: boolean;

  @Column({ type: 'integer', name: 'AppraiseeType' })
  appraiseeType: number;

  @Column({ type: 'integer', name: 'AppraiserType' })
  appraiserType: number;

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