import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TimingSchedule' })
export class LegacyTimingSchedule {
  @PrimaryColumn({ type: 'bigint', name: 'TimingScheduleID' })
  timingScheduleID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Type' })
  type: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'bigint', name: 'JobRef', nullable: true })
  jobRef: number | null;

  @Column({ type: 'character varying', name: 'ScheduleFailureReason', nullable: true })
  scheduleFailureReason: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}