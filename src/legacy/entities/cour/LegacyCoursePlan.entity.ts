import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CoursePlan' })
export class LegacyCoursePlan {
  @PrimaryColumn({ type: 'bigint', name: 'CoursePlanID' })
  coursePlanID: number;

  @Column({ type: 'bigint', name: 'CourseRef' })
  courseRef: number;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'ExecutionMethodCode', nullable: true })
  executionMethodCode: number | null;

  @Column({ type: 'integer', name: 'TrainingTypeCode', nullable: true })
  trainingTypeCode: number | null;

  @Column({ type: 'integer', name: 'ParticipantCount' })
  participantCount: number;

  @Column({ type: 'integer', name: 'Capacity', nullable: true })
  capacity: number | null;

  @Column({ type: 'integer', name: 'Duration', nullable: true })
  duration: number | null;

  @Column({ type: 'integer', name: 'Score', nullable: true })
  score: number | null;

  @Column({ type: 'integer', name: 'CompetencyConditionCode' })
  competencyConditionCode: number;

  @Column({ type: 'integer', name: 'CourseEffectivenessBaseCode', nullable: true })
  courseEffectivenessBaseCode: number | null;

  @Column({ type: 'integer', name: 'LearningQuorum', nullable: true })
  learningQuorum: number | null;

  @Column({ type: 'integer', name: 'CourseEffectivenessForStudentQuorum', nullable: true })
  courseEffectivenessForStudentQuorum: number | null;

  @Column({ type: 'integer', name: 'CourseEffectivenessQuorum', nullable: true })
  courseEffectivenessQuorum: number | null;

  @Column({ type: 'bigint', name: 'InstituteRef', nullable: true })
  instituteRef: number | null;

  @Column({ type: 'integer', name: 'TypeCode', nullable: true })
  typeCode: number | null;

  @Column({ type: 'integer', name: 'PlaceCode', nullable: true })
  placeCode: number | null;

  @Column({ type: 'character varying', name: 'ReferenceDescription', nullable: true })
  referenceDescription: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'ResultCode', nullable: true })
  resultCode: number | null;

  @Column({ type: 'numeric', name: 'ResultScore', nullable: true })
  resultScore: number | null;

  @Column({ type: 'timestamp without time zone', name: 'SessionStartDate', nullable: true })
  sessionStartDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'SessionEndDate', nullable: true })
  sessionEndDate: Date | null;

  @Column({ type: 'integer', name: 'SessionCount', nullable: true })
  sessionCount: number | null;

  @Column({ type: 'integer', name: 'SessionPermitOfAbsent', nullable: true })
  sessionPermitOfAbsent: number | null;

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

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate', nullable: true })
  effectiveDate: Date | null;

}