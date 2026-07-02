import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportationVehicleType' })
export class LegacyTransportationVehicleType {
  @PrimaryColumn({ type: 'bigint', name: 'TransportationVehicleTypeID' })
  transportationVehicleTypeID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'WeightCapacity', nullable: true })
  weightCapacity: number | null;

  @Column({ type: 'numeric', name: 'MinimumWeightCapacity' })
  minimumWeightCapacity: number;

  @Column({ type: 'bigint', name: 'WeightCapacityUnit', nullable: true })
  weightCapacityUnit: number | null;

  @Column({ type: 'integer', name: 'CertificateType', nullable: true })
  certificateType: number | null;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'bigint', name: 'WeightUnit', nullable: true })
  weightUnit: number | null;

  @Column({ type: 'integer', name: 'SpinCount', nullable: true })
  spinCount: number | null;

  @Column({ type: 'integer', name: 'FuelType', nullable: true })
  fuelType: number | null;

  @Column({ type: 'integer', name: 'MovingType', nullable: true })
  movingType: number | null;

  @Column({ type: 'numeric', name: 'Speed', nullable: true })
  speed: number | null;

  @Column({ type: 'integer', name: 'OperationType', nullable: true })
  operationType: number | null;

  @Column({ type: 'numeric', name: 'OperationRange', nullable: true })
  operationRange: number | null;

  @Column({ type: 'numeric', name: 'VolumeCapacity', nullable: true })
  volumeCapacity: number | null;

  @Column({ type: 'numeric', name: 'MinimumVolumeCapacity' })
  minimumVolumeCapacity: number;

  @Column({ type: 'bigint', name: 'VolumeCapacityUnit', nullable: true })
  volumeCapacityUnit: number | null;

}