import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DirectCostAllocation' })
export class LegacyDirectCostAllocation {
  @PrimaryColumn({ type: 'bigint', name: 'DirectCostAllocationID' })
  directCostAllocationID: number;

  @Column({ type: 'bigint', name: 'ReferenceCalcPeriodRef', nullable: true })
  referenceCalcPeriodRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterConversionSLRef' })
  costCenterConversionSLRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'double precision', name: 'Rate' })
  rate: string;

  @Column({ type: 'numeric', name: 'FixLabourCost' })
  fixLabourCost: number;

  @Column({ type: 'numeric', name: 'VariableLabourCost' })
  variableLabourCost: number;

  @Column({ type: 'numeric', name: 'FixOverheadCost' })
  fixOverheadCost: number;

  @Column({ type: 'numeric', name: 'VariableOverheadCost' })
  variableOverheadCost: number;

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