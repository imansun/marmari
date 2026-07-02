import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalendarShare' })
export class LegacyCalendarShare {
  @PrimaryColumn({ type: 'bigint', name: 'CalendarShareID' })
  calendarShareID: number;

  @Column({ type: 'bigint', name: 'CorrespondentShared' })
  correspondentShared: number;

  @Column({ type: 'bigint', name: 'CorrespondentSharedWith' })
  correspondentSharedWith: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}