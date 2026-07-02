import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TrainingAssessmentFactor' })
export class LegacyTrainingAssessmentFactor {
  @PrimaryColumn({ type: 'bigint', name: 'TrainingAssessmentFactorID' })
  trainingAssessmentFactorID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'CategoryCode' })
  categoryCode: number;

  @Column({ type: 'integer', name: 'AssignTypeCode' })
  assignTypeCode: number;

  @Column({ type: 'integer', name: 'FinalResultTypeCode', nullable: true })
  finalResultTypeCode: number | null;

  @Column({ type: 'boolean', name: 'VisibleInData' })
  visibleInData: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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