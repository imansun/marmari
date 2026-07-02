import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IndirectCostAllocationDetail' })
export class LegacyIndirectCostAllocationDetail {
  @PrimaryColumn({ type: 'bigint', name: 'IndirectCostAllocationDetailID' })
  indirectCostAllocationDetailID: number;

  @Column({ type: 'bigint', name: 'IndirectCostAllocationRef' })
  indirectCostAllocationRef: number;

  @Column({ type: 'bigint', name: 'CostCenterConventionSLRef' })
  costCenterConventionSLRef: number;

  @Column({ type: 'numeric', name: 'FixCost' })
  fixCost: number;

  @Column({ type: 'numeric', name: 'VariableCost' })
  variableCost: number;

  @Column({ type: 'numeric', name: 'Cost' })
  cost: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}