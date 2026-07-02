import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaterialClassStoreItem' })
export class LegacyMaterialClassStoreItem {
  @PrimaryColumn({ type: 'bigint', name: 'MaterialClassStoreItemID' })
  materialClassStoreItemID: number;

  @Column({ type: 'bigint', name: 'MaterialClassStoreRef' })
  materialClassStoreRef: number;

  @Column({ type: 'bigint', name: 'ConvertedPartRef', nullable: true })
  convertedPartRef: number | null;

  @Column({ type: 'bigint', name: 'MaterialClassRef' })
  materialClassRef: number;

  @Column({ type: 'integer', name: 'EstimatedLeadTime', nullable: true })
  estimatedLeadTime: number | null;

  @Column({ type: 'integer', name: 'SourceOfSupply', nullable: true })
  sourceOfSupply: number | null;

  @Column({ type: 'numeric', name: 'LastPaidUnitPrice', nullable: true })
  lastPaidUnitPrice: number | null;

  @Column({ type: 'numeric', name: 'MinQty', nullable: true })
  minQty: number | null;

  @Column({ type: 'numeric', name: 'MaxQty', nullable: true })
  maxQty: number | null;

  @Column({ type: 'numeric', name: 'MaxReorderPoint', nullable: true })
  maxReorderPoint: number | null;

  @Column({ type: 'numeric', name: 'EstimatedAnnualUsage', nullable: true })
  estimatedAnnualUsage: number | null;

  @Column({ type: 'bigint', name: 'TrackingFactorRef', nullable: true })
  trackingFactorRef: number | null;

  @Column({ type: 'numeric', name: 'SafetyStock', nullable: true })
  safetyStock: number | null;

  @Column({ type: 'integer', name: 'PlanningCode', nullable: true })
  planningCode: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'ConvertedPartState' })
  convertedPartState: number;

  @Column({ type: 'integer', name: 'StartPeriodMonth', nullable: true })
  startPeriodMonth: number | null;

  @Column({ type: 'integer', name: 'StartPeriodDay', nullable: true })
  startPeriodDay: number | null;

  @Column({ type: 'integer', name: 'EndPeriodMonth', nullable: true })
  endPeriodMonth: number | null;

  @Column({ type: 'integer', name: 'EndPeriodDay', nullable: true })
  endPeriodDay: number | null;

  @Column({ type: 'numeric', name: 'ReorderPoint', nullable: true })
  reorderPoint: number | null;

}