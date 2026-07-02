import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionPlanningFeed' })
export class LegacyProductionPlanningFeed {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionPlanningFeedID' })
  productionPlanningFeedID: number;

  @Column({ type: 'bigint', name: 'ProductionPlanningRef' })
  productionPlanningRef: number;

  @Column({ type: 'bigint', name: 'FeedRef' })
  feedRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'ProductionUnitRef' })
  productionUnitRef: number;

  @Column({ type: 'numeric', name: 'PlanCapacityQuantity', nullable: true })
  planCapacityQuantity: number | null;

  @Column({ type: 'numeric', name: 'DailyPlanCapacityQuantity', nullable: true })
  dailyPlanCapacityQuantity: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}