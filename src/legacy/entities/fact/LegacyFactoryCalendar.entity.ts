import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FactoryCalendar' })
export class LegacyFactoryCalendar {
  @PrimaryColumn({ type: 'bigint', name: 'FactoryCalendarID' })
  factoryCalendarID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'ValidFrom' })
  validFrom: Date;

  @Column({ type: 'timestamp without time zone', name: 'ValidTo', nullable: true })
  validTo: Date | null;

  @Column({ type: 'smallint', name: 'WorkDays', default: 31 })
  workDays: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}