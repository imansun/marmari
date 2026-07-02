import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IndirectCostAllocationBySLState' })
export class LegacyIndirectCostAllocationBySLState {
  @PrimaryColumn({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'boolean', name: 'IsCalculated' })
  isCalculated: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}