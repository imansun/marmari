import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WarehouseStationLocation' })
export class LegacyWarehouseStationLocation {
  @PrimaryColumn({ type: 'bigint', name: 'WarehouseStationLocationID' })
  warehouseStationLocationID: number;

  @Column({ type: 'bigint', name: 'WarehouseStationRef' })
  warehouseStationRef: number;

  @Column({ type: 'bigint', name: 'ZoneRef', nullable: true })
  zoneRef: number | null;

  @Column({ type: 'bigint', name: 'SectionRef', nullable: true })
  sectionRef: number | null;

  @Column({ type: 'bigint', name: 'ShelfRef', nullable: true })
  shelfRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}