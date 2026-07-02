import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Course' })
export class LegacyCourse {
  @PrimaryColumn({ type: 'bigint', name: 'CourseID' })
  courseID: number;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'SubjectCode', nullable: true })
  subjectCode: number | null;

  @Column({ type: 'integer', name: 'ExecutionMethodCode', nullable: true })
  executionMethodCode: number | null;

  @Column({ type: 'integer', name: 'TrainingTypeCode', nullable: true })
  trainingTypeCode: number | null;

  @Column({ type: 'integer', name: 'Duration', nullable: true })
  duration: number | null;

  @Column({ type: 'integer', name: 'Score', nullable: true })
  score: number | null;

  @Column({ type: 'integer', name: 'ReferenceCode', nullable: true })
  referenceCode: number | null;

  @Column({ type: 'integer', name: 'CompetencyConditionCode', nullable: true })
  competencyConditionCode: number | null;

  @Column({ type: 'integer', name: 'CourseEffectivenessBaseCode', nullable: true })
  courseEffectivenessBaseCode: number | null;

  @Column({ type: 'integer', name: 'LearningQuorum', nullable: true })
  learningQuorum: number | null;

  @Column({ type: 'integer', name: 'CourseEffectivenessForStudentQuorum', nullable: true })
  courseEffectivenessForStudentQuorum: number | null;

  @Column({ type: 'integer', name: 'CourseEffectivenessQuorum', nullable: true })
  courseEffectivenessQuorum: number | null;

  @Column({ type: 'integer', name: 'Capacity', nullable: true })
  capacity: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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