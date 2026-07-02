import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CoursePlanParticipant' })
export class LegacyCoursePlanParticipant {
  @PrimaryColumn({ type: 'bigint', name: 'CoursePlanParticipantID' })
  coursePlanParticipantID: number;

  @Column({ type: 'bigint', name: 'CoursePlanRef' })
  coursePlanRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'CourseRequestRef', nullable: true })
  courseRequestRef: number | null;

  @Column({ type: 'integer', name: 'OriginNeedCode', nullable: true })
  originNeedCode: number | null;

  @Column({ type: 'boolean', name: 'IsPassed', nullable: true })
  isPassed: boolean | null;

  @Column({ type: 'boolean', name: 'IsLearned', nullable: true })
  isLearned: boolean | null;

  @Column({ type: 'boolean', name: 'IsCourseEffectiveForStudent', nullable: true })
  isCourseEffectiveForStudent: boolean | null;

  @Column({ type: 'numeric', name: 'LearningScore', nullable: true })
  learningScore: number | null;

  @Column({ type: 'numeric', name: 'CourseEffectiveForStudentScore', nullable: true })
  courseEffectiveForStudentScore: number | null;

  @Column({ type: 'numeric', name: 'SuccessScore', nullable: true })
  successScore: number | null;

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