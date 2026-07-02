import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesTerritoryRegion' })
export class LegacySalesTerritoryRegion {
  @PrimaryColumn({ type: 'bigint', name: 'SalesTerritoryRegionID' })
  salesTerritoryRegionID: number;

  @Column({ type: 'bigint', name: 'SalesTerritoryRef' })
  salesTerritoryRef: number;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef' })
  regionalDivisionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'SalesTerritorializationRef' })
  salesTerritorializationRef: number;

}