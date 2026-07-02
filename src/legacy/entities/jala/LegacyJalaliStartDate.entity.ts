import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'JalaliStartDate' })
export class LegacyJalaliStartDate {
  @PrimaryColumn({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

}