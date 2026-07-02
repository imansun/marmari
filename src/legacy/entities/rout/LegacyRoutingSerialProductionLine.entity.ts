import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingSerialProductionLine' })
export class LegacyRoutingSerialProductionLine {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingSerialProductionLineID' })
  routingSerialProductionLineID: number;

  @Column({ type: 'bigint', name: 'RoutingRef' })
  routingRef: number;

  @Column({ type: 'bigint', name: 'SerialProductionLineRef' })
  serialProductionLineRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}