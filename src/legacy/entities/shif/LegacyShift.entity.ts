import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Shift' })
export class LegacyShift {
  @PrimaryColumn({ type: 'bigint', name: 'ShiftID' })
  shiftID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'StartTime' })
  startTime: number;

  @Column({ type: 'integer', name: 'EndTime' })
  endTime: number;

  @Column({ type: 'integer', name: 'Duration' })
  duration: number;

  @Column({ type: 'integer', name: 'BreakDuration' })
  breakDuration: number;

  @Column({ type: 'integer', name: 'AvailableDuration' })
  availableDuration: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}