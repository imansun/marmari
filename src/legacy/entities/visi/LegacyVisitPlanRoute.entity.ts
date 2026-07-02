import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VisitPlanRoute' })
export class LegacyVisitPlanRoute {
  @PrimaryColumn({ type: 'bigint', name: 'VisitPlanRouteID' })
  visitPlanRouteID: number;

  @Column({ type: 'bigint', name: 'VisitPlanRef' })
  visitPlanRef: number;

  @Column({ type: 'bigint', name: 'RouteRef' })
  routeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}