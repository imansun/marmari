import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionPlanningProductionUnit' })
export class LegacyProductionPlanningProductionUnit {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionPlanningProductionUnitID' })
  productionPlanningProductionUnitID: number;

  @Column({ type: 'bigint', name: 'ProductionPlanningRef' })
  productionPlanningRef: number;

  @Column({ type: 'bigint', name: 'ProductionUnitRef' })
  productionUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}