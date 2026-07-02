import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BrokerSalesTerritory' })
export class LegacyBrokerSalesTerritory {
  @PrimaryColumn({ type: 'bigint', name: 'BrokerSalesTerritoryID' })
  brokerSalesTerritoryID: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bigint', name: 'SalesTerritoryRef' })
  salesTerritoryRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}