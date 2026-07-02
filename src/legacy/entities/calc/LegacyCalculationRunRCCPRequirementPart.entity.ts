import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationRunRCCPRequirementPart' })
export class LegacyCalculationRunRCCPRequirementPart {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationRunRCCPRequirementPartID' })
  calculationRunRCCPRequirementPartID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'RCCPRef' })
  rCCPRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}