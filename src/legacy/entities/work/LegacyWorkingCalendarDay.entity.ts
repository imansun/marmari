import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkingCalendarDay' })
export class LegacyWorkingCalendarDay {
  @PrimaryColumn({ type: 'bigint', name: 'WorkingCalendarDayID' })
  workingCalendarDayID: number;

  @Column({ type: 'bigint', name: 'WorkingCalendarRef' })
  workingCalendarRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'SpecialDayRef', nullable: true })
  specialDayRef: number | null;

  @Column({ type: 'bigint', name: 'WorkingShiftDayRef' })
  workingShiftDayRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}