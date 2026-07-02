import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesGroupRoute' })
export class LegacySalesGroupRoute {
  @PrimaryColumn({ type: 'bigint', name: 'SalesGroupRouteID' })
  salesGroupRouteID: number;

  @Column({ type: 'bigint', name: 'SalesGroupRef' })
  salesGroupRef: number;

  @Column({ type: 'bigint', name: 'RouteRef' })
  routeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}