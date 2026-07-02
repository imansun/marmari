import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartQuantityControl' })
export class LegacyPartQuantityControl {
  @PrimaryColumn({ type: 'bigint', name: 'PartQuantityControlID' })
  partQuantityControlID: number;

  @Column({ type: 'numeric', name: 'MinQty', nullable: true })
  minQty: number | null;

  @Column({ type: 'numeric', name: 'MaxQty', nullable: true })
  maxQty: number | null;

  @Column({ type: 'numeric', name: 'EconomicOrderQty', nullable: true })
  economicOrderQty: number | null;

  @Column({ type: 'numeric', name: 'ReorderPoint', nullable: true })
  reorderPoint: number | null;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PlantRef', nullable: true })
  plantRef: number | null;

  @Column({ type: 'numeric', name: 'SafetyStock', nullable: true })
  safetyStock: number | null;

  @Column({ type: 'integer', name: 'PlanningCode', nullable: true })
  planningCode: number | null;

  @Column({ type: 'integer', name: 'EstimatedLeadTime', nullable: true })
  estimatedLeadTime: number | null;

  @Column({ type: 'numeric', name: 'EstimatedAnnualUsage', nullable: true })
  estimatedAnnualUsage: number | null;

  @Column({ type: 'integer', name: 'PreviousPlanningCode', nullable: true })
  previousPlanningCode: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'StartPeriodMonth', nullable: true })
  startPeriodMonth: number | null;

  @Column({ type: 'integer', name: 'StartPeriodDay', nullable: true })
  startPeriodDay: number | null;

  @Column({ type: 'integer', name: 'EndPeriodMonth', nullable: true })
  endPeriodMonth: number | null;

  @Column({ type: 'integer', name: 'EndPeriodDay', nullable: true })
  endPeriodDay: number | null;

  @Column({ type: 'integer', name: 'LeadTimeCalculationType', default: 3 })
  leadTimeCalculationType: number;

  @Column({ type: 'integer', name: 'PartRecieveLeadTime', nullable: true })
  partRecieveLeadTime: number | null;

  @Column({ type: 'integer', name: 'SafetyTime', nullable: true })
  safetyTime: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

}