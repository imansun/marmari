import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalFormActor' })
export class LegacyAppraisalFormActor {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalFormActorID' })
  appraisalFormActorID: number;

  @Column({ type: 'bigint', name: 'AppraisalFormRef' })
  appraisalFormRef: number;

  @Column({ type: 'timestamp without time zone', name: 'DistributionDate' })
  distributionDate: Date;

  @Column({ type: 'integer', name: 'AppraiseeType' })
  appraiseeType: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'AppraiseeID' })
  appraiseeID: number;

  @Column({ type: 'integer', name: 'AppraiserType' })
  appraiserType: number;

  @Column({ type: 'bigint', name: 'AppraiserID' })
  appraiserID: number;

  @Column({ type: 'timestamp without time zone', name: 'FinalDate', nullable: true })
  finalDate: Date | null;

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