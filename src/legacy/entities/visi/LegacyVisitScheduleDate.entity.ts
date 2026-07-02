import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VisitScheduleDate' })
export class LegacyVisitScheduleDate {
  @PrimaryColumn({ type: 'bigint', name: 'VisitScheduleDateID' })
  visitScheduleDateID: number;

  @Column({ type: 'bigint', name: 'VisitScheduleRef' })
  visitScheduleRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}