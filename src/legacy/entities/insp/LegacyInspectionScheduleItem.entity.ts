import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionScheduleItem' })
export class LegacyInspectionScheduleItem {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionScheduleItemID' })
  inspectionScheduleItemID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'InspectionScheduleRef' })
  inspectionScheduleRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'TimeUnit' })
  timeUnit: number;

  @Column({ type: 'integer', name: 'CycleUnit' })
  cycleUnit: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}