import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PublicHoliday' })
export class LegacyPublicHoliday {
  @PrimaryColumn({ type: 'bigint', name: 'PublicHolidayID' })
  publicHolidayID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'smallint', name: 'CalendarType' })
  calendarType: number;

  @Column({ type: 'smallint', name: 'Month' })
  month: number;

  @Column({ type: 'smallint', name: 'Day' })
  day: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}