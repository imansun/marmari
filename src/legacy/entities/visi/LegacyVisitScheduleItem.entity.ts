import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VisitScheduleItem' })
export class LegacyVisitScheduleItem {
  @PrimaryColumn({ type: 'bigint', name: 'VisitScheduleItemID' })
  visitScheduleItemID: number;

  @Column({ type: 'bigint', name: 'VisitScheduleRef' })
  visitScheduleRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'boolean', name: 'HasOrderTaking' })
  hasOrderTaking: boolean;

  @Column({ type: 'boolean', name: 'HasHotSales' })
  hasHotSales: boolean;

  @Column({ type: 'boolean', name: 'HasDistribution' })
  hasDistribution: boolean;

  @Column({ type: 'boolean', name: 'HasCollection' })
  hasCollection: boolean;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerAddressRef', nullable: true })
  customerAddressRef: number | null;

  @Column({ type: 'bigint', name: 'RouteRef', nullable: true })
  routeRef: number | null;

  @Column({ type: 'bigint', name: 'SalesTerritoryRef', nullable: true })
  salesTerritoryRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}