import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionPlanningTimeBucket' })
export class LegacyProductionPlanningTimeBucket {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionPlanningTimeBucketID' })
  productionPlanningTimeBucketID: number;

  @Column({ type: 'bigint', name: 'ProductionPlanningRef' })
  productionPlanningRef: number;

  @Column({ type: 'integer', name: 'TimeBucketNo' })
  timeBucketNo: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}