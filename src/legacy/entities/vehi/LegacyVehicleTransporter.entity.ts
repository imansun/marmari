import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VehicleTransporter' })
export class LegacyVehicleTransporter {
  @PrimaryColumn({ type: 'bigint', name: 'VehicleTransporterID' })
  vehicleTransporterID: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleRef' })
  transportationVehicleRef: number;

  @Column({ type: 'bigint', name: 'TransporterRef' })
  transporterRef: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}