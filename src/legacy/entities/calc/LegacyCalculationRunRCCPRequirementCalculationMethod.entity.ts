import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationRunRCCPRequirementCalculationMethod' })
export class LegacyCalculationRunRCCPRequirementCalculationMethod {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationRunRCCPRequirementCalculationMethodID' })
  calculationRunRCCPRequirementCalculationMethodID: number;

  @Column({ type: 'bigint', name: 'RCCPRef' })
  rCCPRef: number;

  @Column({ type: 'integer', name: 'CalculationMethod', nullable: true })
  calculationMethod: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}