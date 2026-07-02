import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationScenarioIRPProgramIRP' })
export class LegacyCalculationScenarioIRPProgramIRP {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationScenarioIRPProgramIRPID' })
  calculationScenarioIRPProgramIRPID: number;

  @Column({ type: 'bigint', name: 'CalculationScenarioIRPProgramRef' })
  calculationScenarioIRPProgramRef: number;

  @Column({ type: 'boolean', name: 'ApplyInCalculations' })
  applyInCalculations: boolean;

  @Column({ type: 'bigint', name: 'IRPRef' })
  iRPRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}