import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkstationCostAllocation' })
export class LegacyWorkstationCostAllocation {
  @PrimaryColumn({ type: 'bigint', name: 'WorkstationCostAllocationID' })
  workstationCostAllocationID: number;

  @Column({ type: 'bigint', name: 'ReferenceCalcPeriodRef', nullable: true })
  referenceCalcPeriodRef: number | null;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'numeric', name: 'DirectVariableLabourCost' })
  directVariableLabourCost: number;

  @Column({ type: 'numeric', name: 'DirectFixLabourCost' })
  directFixLabourCost: number;

  @Column({ type: 'numeric', name: 'DirectVariableOverheadCost' })
  directVariableOverheadCost: number;

  @Column({ type: 'numeric', name: 'DirectFixOverheadCost' })
  directFixOverheadCost: number;

  @Column({ type: 'numeric', name: 'IndirectVariableCost' })
  indirectVariableCost: number;

  @Column({ type: 'numeric', name: 'IndirectFixCost' })
  indirectFixCost: number;

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