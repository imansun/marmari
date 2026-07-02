import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BrokerRoute' })
export class LegacyBrokerRoute {
  @PrimaryColumn({ type: 'bigint', name: 'BrokerRouteID' })
  brokerRouteID: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bigint', name: 'RouteRef' })
  routeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}