import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionLineCollectedSerialMixedProductionOrder' })
export class LegacyProductionLineCollectedSerialMixedProductionOrder {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionLineCollectedSerialMixedProductionOrderID' })
  productionLineCollectedSerialMixedProductionOrderID: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'bigint', name: 'DetermineProductionLineCollectedSerialRef' })
  determineProductionLineCollectedSerialRef: number;

  @Column({ type: 'bigint', name: 'ProductionOrderRef' })
  productionOrderRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}