import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IndirectCostAllocation' })
export class LegacyIndirectCostAllocation {
  @PrimaryColumn({ type: 'bigint', name: 'IndirectCostAllocationID' })
  indirectCostAllocationID: number;

  @Column({ type: 'bigint', name: 'ReferenceCalcPeriodRef', nullable: true })
  referenceCalcPeriodRef: number | null;

  @Column({ type: 'bigint', name: 'DonorCostCenterExRef' })
  donorCostCenterExRef: number;

  @Column({ type: 'bigint', name: 'AcceptorCostCenterExRef' })
  acceptorCostCenterExRef: number;

  @Column({ type: 'bigint', name: 'AcceptorWorkstationRef', nullable: true })
  acceptorWorkstationRef: number | null;

  @Column({ type: 'double precision', name: 'Rate' })
  rate: string;

  @Column({ type: 'numeric', name: 'FixCost' })
  fixCost: number;

  @Column({ type: 'numeric', name: 'VariableCost' })
  variableCost: number;

  @Column({ type: 'numeric', name: 'Cost' })
  cost: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}