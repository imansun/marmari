import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Route' })
export class LegacyRoute {
  @PrimaryColumn({ type: 'bigint', name: 'RouteID' })
  routeID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'CarrierRef', nullable: true })
  carrierRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'TransportationUnitRef', nullable: true })
  transportationUnitRef: number | null;

  @Column({ type: 'integer', name: 'RoutingType', nullable: true })
  routingType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsOrderTaking' })
  isOrderTaking: boolean;

  @Column({ type: 'boolean', name: 'IsHotSales' })
  isHotSales: boolean;

  @Column({ type: 'boolean', name: 'IsDistribution' })
  isDistribution: boolean;

  @Column({ type: 'boolean', name: 'IsCollection' })
  isCollection: boolean;

}