import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkstationAbsorbedRate' })
export class LegacyWorkstationAbsorbedRate {
  @PrimaryColumn({ type: 'bigint', name: 'WorkstationAbsorbedRateID' })
  workstationAbsorbedRateID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'numeric', name: 'FixOverheadAbsorbedRate' })
  fixOverheadAbsorbedRate: number;

  @Column({ type: 'numeric', name: 'VariableOverheadAbsorbedRate' })
  variableOverheadAbsorbedRate: number;

  @Column({ type: 'numeric', name: 'VariableLabourAbsorbedRate' })
  variableLabourAbsorbedRate: number;

  @Column({ type: 'numeric', name: 'FixLabourAbsorbedRate' })
  fixLabourAbsorbedRate: number;

  @Column({ type: 'numeric', name: 'LabourBudgetedCapacity', nullable: true })
  labourBudgetedCapacity: number | null;

  @Column({ type: 'numeric', name: 'OverheadBudgetedCapacity', nullable: true })
  overheadBudgetedCapacity: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}