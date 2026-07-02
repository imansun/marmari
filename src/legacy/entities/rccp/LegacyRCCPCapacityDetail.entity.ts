import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RCCPCapacityDetail' })
export class LegacyRCCPCapacityDetail {
  @PrimaryColumn({ type: 'bigint', name: 'RCCPCapacityDetailID' })
  rCCPCapacityDetailID: number;

  @Column({ type: 'bigint', name: 'RCCPCapacityRef' })
  rCCPCapacityRef: number;

  @Column({ type: 'character varying', name: 'ShiftTitle', nullable: true })
  shiftTitle: string | null;

  @Column({ type: 'character varying', name: 'WeekDayName', nullable: true })
  weekDayName: string | null;

  @Column({ type: 'integer', name: 'StartTime' })
  startTime: number;

  @Column({ type: 'integer', name: 'StartTimeEdit' })
  startTimeEdit: number;

  @Column({ type: 'integer', name: 'EndTime' })
  endTime: number;

  @Column({ type: 'integer', name: 'EndTimeEdit' })
  endTimeEdit: number;

  @Column({ type: 'integer', name: 'BreakTime' })
  breakTime: number;

  @Column({ type: 'integer', name: 'BreakTimeEdit' })
  breakTimeEdit: number;

  @Column({ type: 'numeric', name: 'ParallelQuantity' })
  parallelQuantity: number;

  @Column({ type: 'numeric', name: 'ParallelQuantityEdit' })
  parallelQuantityEdit: number;

  @Column({ type: 'numeric', name: 'UtilizationPercent' })
  utilizationPercent: number;

  @Column({ type: 'numeric', name: 'UtilizationPercentEdit' })
  utilizationPercentEdit: number;

  @Column({ type: 'integer', name: 'DetailAvailableCapacity' })
  detailAvailableCapacity: number;

  @Column({ type: 'integer', name: 'Day', nullable: true })
  day: number | null;

  @Column({ type: 'integer', name: 'DayOfWeekCount' })
  dayOfWeekCount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}