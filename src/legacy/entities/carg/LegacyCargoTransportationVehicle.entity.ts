import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CargoTransportationVehicle' })
export class LegacyCargoTransportationVehicle {
  @PrimaryColumn({ type: 'bigint', name: 'CargoTransportationVehicleID' })
  cargoTransportationVehicleID: number;

  @Column({ type: 'bigint', name: 'CargoRef' })
  cargoRef: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleRef' })
  transportationVehicleRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}