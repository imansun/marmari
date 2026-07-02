import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VisitPatternItem' })
export class LegacyVisitPatternItem {
  @PrimaryColumn({ type: 'bigint', name: 'VisitPatternItemID' })
  visitPatternItemID: number;

  @Column({ type: 'bigint', name: 'VisitPatternRef' })
  visitPatternRef: number;

  @Column({ type: 'integer', name: 'DayNumber', nullable: true })
  dayNumber: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

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