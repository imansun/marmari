import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkingShift' })
export class LegacyWorkingShift {
  @PrimaryColumn({ type: 'bigint', name: 'WorkingShiftID' })
  workingShiftID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character', name: 'Color' })
  color: string;

  @Column({ type: 'boolean', name: 'DailyAttendanceReset' })
  dailyAttendanceReset: boolean;

  @Column({ type: 'integer', name: 'State', default: 1 })
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