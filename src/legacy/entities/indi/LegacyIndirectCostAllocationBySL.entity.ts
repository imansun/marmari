import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IndirectCostAllocationBySL' })
export class LegacyIndirectCostAllocationBySL {
  @PrimaryColumn({ type: 'bigint', name: 'IndirectCostAllocationBySLDetailID' })
  indirectCostAllocationBySLDetailID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'DonorCostCenterExRef' })
  donorCostCenterExRef: number;

  @Column({ type: 'bigint', name: 'AcceptorCostCenterExRef' })
  acceptorCostCenterExRef: number;

  @Column({ type: 'bigint', name: 'AcceptorWorkstationRef', nullable: true })
  acceptorWorkstationRef: number | null;

  @Column({ type: 'bigint', name: 'ConversionSLRef' })
  conversionSLRef: number;

  @Column({ type: 'double precision', name: 'Rate' })
  rate: string;

  @Column({ type: 'numeric', name: 'FixCost' })
  fixCost: number;

  @Column({ type: 'numeric', name: 'VariableCost' })
  variableCost: number;

  @Column({ type: 'numeric', name: 'Cost' })
  cost: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}