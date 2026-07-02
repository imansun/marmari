import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkingShiftDay' })
export class LegacyWorkingShiftDay {
  @PrimaryColumn({ type: 'bigint', name: 'WorkingShiftDayID' })
  workingShiftDayID: number;

  @Column({ type: 'bigint', name: 'WorkingShiftRef' })
  workingShiftRef: number;

  @Column({ type: 'integer', name: 'DayNo' })
  dayNo: number;

  @Column({ type: 'integer', name: 'StartTime' })
  startTime: number;

  @Column({ type: 'integer', name: 'EndTime' })
  endTime: number;

  @Column({ type: 'integer', name: 'ExtraMinutesBefore' })
  extraMinutesBefore: number;

  @Column({ type: 'integer', name: 'ExtraMinutesAfter' })
  extraMinutesAfter: number;

  @Column({ type: 'integer', name: 'StartRestTime1', nullable: true })
  startRestTime1: number | null;

  @Column({ type: 'integer', name: 'EndRestTime1', nullable: true })
  endRestTime1: number | null;

  @Column({ type: 'integer', name: 'StartRestTime2', nullable: true })
  startRestTime2: number | null;

  @Column({ type: 'integer', name: 'EndRestTime2', nullable: true })
  endRestTime2: number | null;

  @Column({ type: 'integer', name: 'StartRestTime3', nullable: true })
  startRestTime3: number | null;

  @Column({ type: 'integer', name: 'EndRestTime3', nullable: true })
  endRestTime3: number | null;

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