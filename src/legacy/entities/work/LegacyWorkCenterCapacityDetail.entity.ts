import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkCenterCapacityDetail' })
export class LegacyWorkCenterCapacityDetail {
  @PrimaryColumn({ type: 'bigint', name: 'WorkCenterCapacityDetailID' })
  workCenterCapacityDetailID: number;

  @Column({ type: 'bigint', name: 'WorkCenterCapacityRef', nullable: true })
  workCenterCapacityRef: number | null;

  @Column({ type: 'integer', name: 'Day', nullable: true })
  day: number | null;

  @Column({ type: 'bigint', name: 'ShiftRef', nullable: true })
  shiftRef: number | null;

  @Column({ type: 'integer', name: 'StartTime' })
  startTime: number;

  @Column({ type: 'integer', name: 'EndTime' })
  endTime: number;

  @Column({ type: 'integer', name: 'BreakTime' })
  breakTime: number;

  @Column({ type: 'numeric', name: 'ParallelQuantity' })
  parallelQuantity: number;

  @Column({ type: 'numeric', name: 'UtilizationPercent' })
  utilizationPercent: number;

  @Column({ type: 'integer', name: 'AvailableCapacity' })
  availableCapacity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'WorkCenterCapacityShiftGroupingAndFactoryCalendarRef', nullable: true })
  workCenterCapacityShiftGroupingAndFactoryCalendarRef: number | null;

}