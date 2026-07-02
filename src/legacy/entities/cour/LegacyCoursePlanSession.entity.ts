import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CoursePlanSession' })
export class LegacyCoursePlanSession {
  @PrimaryColumn({ type: 'bigint', name: 'CoursePlanSessionID' })
  coursePlanSessionID: number;

  @Column({ type: 'bigint', name: 'CoursePlanRef' })
  coursePlanRef: number;

  @Column({ type: 'timestamp without time zone', name: 'SessionDate' })
  sessionDate: Date;

  @Column({ type: 'integer', name: 'StartTime' })
  startTime: number;

  @Column({ type: 'integer', name: 'EndTime' })
  endTime: number;

  @Column({ type: 'bigint', name: 'TrainerRef', nullable: true })
  trainerRef: number | null;

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