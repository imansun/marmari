import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PlanIndicator' })
export class LegacyPlanIndicator {
  @PrimaryColumn({ type: 'bigint', name: 'PlanIndicatorID' })
  planIndicatorID: number;

  @Column({ type: 'bigint', name: 'PlanRef' })
  planRef: number;

  @Column({ type: 'integer', name: 'Row' })
  row: number;

  @Column({ type: 'integer', name: 'IndicatorType' })
  indicatorType: number;

  @Column({ type: 'integer', name: 'GroupNumber', nullable: true })
  groupNumber: number | null;

  @Column({ type: 'bigint', name: 'MeasurementParameterRef', nullable: true })
  measurementParameterRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'CycleUnit', nullable: true })
  cycleUnit: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'TimeUnit', nullable: true })
  timeUnit: number | null;

}