import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationPeriodHCMIntegration' })
export class LegacyCalculationPeriodHCMIntegration {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationPeriodHCMIntegrationID' })
  calculationPeriodHCMIntegrationID: number;

  @Column({ type: 'bigint', name: 'CalculationPeriodRef' })
  calculationPeriodRef: number;

  @Column({ type: 'boolean', name: 'IsHCMIntegrated', nullable: true })
  isHCMIntegrated: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}