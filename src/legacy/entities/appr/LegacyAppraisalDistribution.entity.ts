import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalDistribution' })
export class LegacyAppraisalDistribution {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalDistributionID' })
  appraisalDistributionID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'Deadline' })
  deadline: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'Status', nullable: true })
  status: number | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'AppraisalFormTemplateRef' })
  appraisalFormTemplateRef: number;

  @Column({ type: 'bigint', name: 'AppraisalPeriodRef', nullable: true })
  appraisalPeriodRef: number | null;

  @Column({ type: 'bigint', name: 'AppraiseeConditionsRef' })
  appraiseeConditionsRef: number;

  @Column({ type: 'bigint', name: 'AppraiserConditionsRef' })
  appraiserConditionsRef: number;

  @Column({ type: 'integer', name: 'DistributionReference', nullable: true })
  distributionReference: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DistributionDate', nullable: true })
  distributionDate: Date | null;

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