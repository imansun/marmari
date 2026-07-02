import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationRunRCCPRequirementPlannedOrder' })
export class LegacyCalculationRunRCCPRequirementPlannedOrder {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationRunRCCPRequirementPlannedOrderID' })
  calculationRunRCCPRequirementPlannedOrderID: number;

  @Column({ type: 'bigint', name: 'PlannedOrderRef' })
  plannedOrderRef: number;

  @Column({ type: 'bigint', name: 'RCCPRef' })
  rCCPRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}