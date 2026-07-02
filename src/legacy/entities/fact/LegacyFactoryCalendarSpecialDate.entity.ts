import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FactoryCalendarSpecialDate' })
export class LegacyFactoryCalendarSpecialDate {
  @PrimaryColumn({ type: 'bigint', name: 'FactoryCalendarSpecialDateID' })
  factoryCalendarSpecialDateID: number;

  @Column({ type: 'bigint', name: 'FactoryCalendarRef' })
  factoryCalendarRef: number;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'boolean', name: 'IsOffDay', default: false })
  isOffDay: boolean;

  @Column({ type: 'bigint', name: 'PublicHolidayRef', nullable: true })
  publicHolidayRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}