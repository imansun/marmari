import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionBalanceProductionUnit' })
export class LegacyProductionBalanceProductionUnit {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionBalanceProductionUnitID' })
  productionBalanceProductionUnitID: number;

  @Column({ type: 'bigint', name: 'ProductionBalanceRef' })
  productionBalanceRef: number;

  @Column({ type: 'bigint', name: 'ProductionUnitRef' })
  productionUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}