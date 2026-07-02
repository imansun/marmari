import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EngineeringPartBomRoutingExtension' })
export class LegacyEngineeringPartBomRoutingExtension {
  @PrimaryColumn({ type: 'bigint', name: 'EngineeringPartBomRoutingExtensionID' })
  engineeringPartBomRoutingExtensionID: number;

  @Column({ type: 'bigint', name: 'EngineeringPartExtensionRef' })
  engineeringPartExtensionRef: number;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'BomRef' })
  bomRef: number;

  @Column({ type: 'bigint', name: 'RoutingRef' })
  routingRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}