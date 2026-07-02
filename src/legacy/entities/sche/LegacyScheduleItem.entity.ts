import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ScheduleItem' })
export class LegacyScheduleItem {
  @PrimaryColumn({ type: 'bigint', name: 'ScheduleItemID' })
  scheduleItemID: number;

  @Column({ type: 'bigint', name: 'ScheduleRef' })
  scheduleRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'StartTime' })
  startTime: number;

  @Column({ type: 'integer', name: 'EndTime' })
  endTime: number;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'integer', name: 'Interval', nullable: true })
  interval: number | null;

  @Column({ type: 'integer', name: 'WeekDays', nullable: true })
  weekDays: number | null;

  @Column({ type: 'integer', name: 'DaysOfMonth', nullable: true })
  daysOfMonth: number | null;

  @Column({ type: 'integer', name: 'Months', nullable: true })
  months: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}