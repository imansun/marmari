import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesGroupSalesTerritory' })
export class LegacySalesGroupSalesTerritory {
  @PrimaryColumn({ type: 'bigint', name: 'SalesGroupSalesTerritory' })
  salesGroupSalesTerritory: number;

  @Column({ type: 'bigint', name: 'SalesGroupRef' })
  salesGroupRef: number;

  @Column({ type: 'bigint', name: 'SalesTerritoryRef' })
  salesTerritoryRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}