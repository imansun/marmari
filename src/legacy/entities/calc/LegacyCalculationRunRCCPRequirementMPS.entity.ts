import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationRunRCCPRequirementMPS' })
export class LegacyCalculationRunRCCPRequirementMPS {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationRunRCCPRequirementMPSID' })
  calculationRunRCCPRequirementMPSID: number;

  @Column({ type: 'bigint', name: 'CalculationRunRef' })
  calculationRunRef: number;

  @Column({ type: 'bigint', name: 'RCCPRef' })
  rCCPRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}