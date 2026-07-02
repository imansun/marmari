import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShiftShiftBreak' })
export class LegacyShiftShiftBreak {
  @PrimaryColumn({ type: 'bigint', name: 'ShiftShiftBreakID' })
  shiftShiftBreakID: number;

  @Column({ type: 'bigint', name: 'ShiftRef' })
  shiftRef: number;

  @Column({ type: 'bigint', name: 'ShiftBreakRef' })
  shiftBreakRef: number;

  @Column({ type: 'integer', name: 'StartTime' })
  startTime: number;

  @Column({ type: 'integer', name: 'EndTime' })
  endTime: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}