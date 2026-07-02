import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationScenarioPlant' })
export class LegacyCalculationScenarioPlant {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationScenarioPlantID' })
  calculationScenarioPlantID: number;

  @Column({ type: 'bigint', name: 'CalculationScenarioRef' })
  calculationScenarioRef: number;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsCentralizedPlant', nullable: true })
  isCentralizedPlant: boolean | null;

}