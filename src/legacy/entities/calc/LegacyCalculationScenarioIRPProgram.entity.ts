import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationScenarioIRPProgram' })
export class LegacyCalculationScenarioIRPProgram {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationScenarioIRPProgramID' })
  calculationScenarioIRPProgramID: number;

  @Column({ type: 'bigint', name: 'CalculationScenarioRef' })
  calculationScenarioRef: number;

  @Column({ type: 'bigint', name: 'IRPProgramRef' })
  iRPProgramRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}