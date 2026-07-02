import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationScenarioPlantStore' })
export class LegacyCalculationScenarioPlantStore {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationScenarioPlantStoreID' })
  calculationScenarioPlantStoreID: number;

  @Column({ type: 'bigint', name: 'CalculationScenarioPlantRef' })
  calculationScenarioPlantRef: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}