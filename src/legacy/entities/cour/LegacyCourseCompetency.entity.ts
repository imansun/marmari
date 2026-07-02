import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CourseCompetency' })
export class LegacyCourseCompetency {
  @PrimaryColumn({ type: 'bigint', name: 'CourseCompetencyID' })
  courseCompetencyID: number;

  @Column({ type: 'bigint', name: 'CourseRef' })
  courseRef: number;

  @Column({ type: 'bigint', name: 'CompetencyRef', nullable: true })
  competencyRef: number | null;

  @Column({ type: 'integer', name: 'ConditionCode', nullable: true })
  conditionCode: number | null;

  @Column({ type: 'integer', name: 'Quorum', nullable: true })
  quorum: number | null;

  @Column({ type: 'character varying', name: 'CourseObjective', nullable: true })
  courseObjective: string | null;

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