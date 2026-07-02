import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionPlanningProduct' })
export class LegacyProductionPlanningProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionPlanningProductID' })
  productionPlanningProductID: number;

  @Column({ type: 'bigint', name: 'ProductionPlanningRef' })
  productionPlanningRef: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'ProductionUnitRef' })
  productionUnitRef: number;

  @Column({ type: 'numeric', name: 'DesignCapacityQuantity', nullable: true })
  designCapacityQuantity: number | null;

  @Column({ type: 'numeric', name: 'DailyDesignCapacityQuantity', nullable: true })
  dailyDesignCapacityQuantity: number | null;

  @Column({ type: 'numeric', name: 'PlanCapacityQuantity', nullable: true })
  planCapacityQuantity: number | null;

  @Column({ type: 'numeric', name: 'DailyPlanCapacityQuantity', nullable: true })
  dailyPlanCapacityQuantity: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}