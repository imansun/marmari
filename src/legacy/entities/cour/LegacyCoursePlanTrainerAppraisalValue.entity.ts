import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CoursePlanTrainerAppraisalValue' })
export class LegacyCoursePlanTrainerAppraisalValue {
  @PrimaryColumn({ type: 'bigint', name: 'CoursePlanTrainerAppraisalValueID' })
  coursePlanTrainerAppraisalValueID: number;

  @Column({ type: 'bigint', name: 'CoursePlanTrainerRef' })
  coursePlanTrainerRef: number;

  @Column({ type: 'bigint', name: 'CoursePlanAppraisalRef' })
  coursePlanAppraisalRef: number;

  @Column({ type: 'bigint', name: 'AppraisalFormActorRef', nullable: true })
  appraisalFormActorRef: number | null;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}