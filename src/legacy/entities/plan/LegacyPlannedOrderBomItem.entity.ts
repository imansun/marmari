import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PlannedOrderBomItem' })
export class LegacyPlannedOrderBomItem {
  @PrimaryColumn({ type: 'bigint', name: 'PlannedOrderBomItemID' })
  plannedOrderBomItemID: number;

  @Column({ type: 'bigint', name: 'PlannedOrderRef' })
  plannedOrderRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'integer', name: 'GroupNumber', nullable: true })
  groupNumber: number | null;

  @Column({ type: 'integer', name: 'Priority', nullable: true })
  priority: number | null;

  @Column({ type: 'integer', name: 'AlternativeStrategy', nullable: true })
  alternativeStrategy: number | null;

  @Column({ type: 'numeric', name: 'UsagePercentage', nullable: true })
  usagePercentage: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}