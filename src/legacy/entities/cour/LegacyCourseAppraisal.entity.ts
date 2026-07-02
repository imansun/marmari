import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CourseAppraisal' })
export class LegacyCourseAppraisal {
  @PrimaryColumn({ type: 'bigint', name: 'CourseAppraisalID' })
  courseAppraisalID: number;

  @Column({ type: 'bigint', name: 'CourseRef' })
  courseRef: number;

  @Column({ type: 'bigint', name: 'AppraisalFormTemplateRef', nullable: true })
  appraisalFormTemplateRef: number | null;

  @Column({ type: 'integer', name: 'TitleCode' })
  titleCode: number;

  @Column({ type: 'integer', name: 'AppraisalLevelCode' })
  appraisalLevelCode: number;

  @Column({ type: 'integer', name: 'AppraisalExecutionTimeCode', nullable: true })
  appraisalExecutionTimeCode: number | null;

  @Column({ type: 'integer', name: 'Quorum' })
  quorum: number;

  @Column({ type: 'numeric', name: 'Weight' })
  weight: number;

  @Column({ type: 'integer', name: 'MinimumInstancePercent', nullable: true })
  minimumInstancePercent: number | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

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