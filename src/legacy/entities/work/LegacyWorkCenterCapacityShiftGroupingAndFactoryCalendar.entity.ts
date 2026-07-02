import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkCenterCapacityShiftGroupingAndFactoryCalendar' })
export class LegacyWorkCenterCapacityShiftGroupingAndFactoryCalendar {
  @PrimaryColumn({ type: 'bigint', name: 'WorkCenterCapacityShiftGroupingAndFactoryCalendarID' })
  workCenterCapacityShiftGroupingAndFactoryCalendarID: number;

  @Column({ type: 'bigint', name: 'WorkCenterCapacityRef' })
  workCenterCapacityRef: number;

  @Column({ type: 'bigint', name: 'ShiftGroupingRef', nullable: true })
  shiftGroupingRef: number | null;

  @Column({ type: 'bigint', name: 'FactoryCalendarRef', nullable: true })
  factoryCalendarRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ValidFrom' })
  validFrom: Date;

  @Column({ type: 'timestamp without time zone', name: 'ValidTo', nullable: true })
  validTo: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}