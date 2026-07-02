import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShiftGroupingDay' })
export class LegacyShiftGroupingDay {
  @PrimaryColumn({ type: 'bigint', name: 'ShiftGroupingDayID' })
  shiftGroupingDayID: number;

  @Column({ type: 'bigint', name: 'ShiftGroupingRef' })
  shiftGroupingRef: number;

  @Column({ type: 'bigint', name: 'ShiftRef' })
  shiftRef: number;

  @Column({ type: 'integer', name: 'Day' })
  day: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}