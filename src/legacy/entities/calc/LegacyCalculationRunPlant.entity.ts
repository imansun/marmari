import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationRunPlant' })
export class LegacyCalculationRunPlant {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationRunPlantID' })
  calculationRunPlantID: number;

  @Column({ type: 'bigint', name: 'CalculationRunRef' })
  calculationRunRef: number;

  @Column({ type: 'bigint', name: 'CalculationScenarioPlantRef' })
  calculationScenarioPlantRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}