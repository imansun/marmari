import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StationStraightPath' })
export class LegacyStationStraightPath {
  @PrimaryColumn({ type: 'bigint', name: 'StationStraightPathID' })
  stationStraightPathID: number;

  @Column({ type: 'bigint', name: 'FirstWarehouseStationRef' })
  firstWarehouseStationRef: number;

  @Column({ type: 'bigint', name: 'SecondWarehouseStationRef' })
  secondWarehouseStationRef: number;

  @Column({ type: 'numeric', name: 'RelativeDistance' })
  relativeDistance: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}