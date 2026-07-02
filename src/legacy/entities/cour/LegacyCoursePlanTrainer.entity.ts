import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CoursePlanTrainer' })
export class LegacyCoursePlanTrainer {
  @PrimaryColumn({ type: 'bigint', name: 'CoursePlanTrainerID' })
  coursePlanTrainerID: number;

  @Column({ type: 'bigint', name: 'CoursePlanRef' })
  coursePlanRef: number;

  @Column({ type: 'bigint', name: 'TrainerRef' })
  trainerRef: number;

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

  @Column({ type: 'integer', name: 'CourseEvaluation', nullable: true })
  courseEvaluation: number | null;

}