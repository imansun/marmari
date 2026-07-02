import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VisitPlanSalesTerritory' })
export class LegacyVisitPlanSalesTerritory {
  @PrimaryColumn({ type: 'bigint', name: 'VisitPlanSalesTerritoryID' })
  visitPlanSalesTerritoryID: number;

  @Column({ type: 'bigint', name: 'VisitPlanRef' })
  visitPlanRef: number;

  @Column({ type: 'bigint', name: 'SalesTerritoryRef' })
  salesTerritoryRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}