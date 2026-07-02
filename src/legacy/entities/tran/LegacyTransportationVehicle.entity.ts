import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportationVehicle' })
export class LegacyTransportationVehicle {
  @PrimaryColumn({ type: 'bigint', name: 'TransportationVehicleID' })
  transportationVehicleID: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleTypeRef' })
  transportationVehicleTypeRef: number;

  @Column({ type: 'bigint', name: 'CarrierRef', nullable: true })
  carrierRef: number | null;

  @Column({ type: 'bigint', name: 'TransportationUnitRef', nullable: true })
  transportationUnitRef: number | null;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'WeightCapacity' })
  weightCapacity: number;

  @Column({ type: 'numeric', name: 'MinimumWeightCapacity' })
  minimumWeightCapacity: number;

  @Column({ type: 'bigint', name: 'WeightCapacityUnitRef', nullable: true })
  weightCapacityUnitRef: number | null;

  @Column({ type: 'integer', name: 'CertificateType' })
  certificateType: number;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'bigint', name: 'WeightUnitRef', nullable: true })
  weightUnitRef: number | null;

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

  @Column({ type: 'character varying', name: 'PlateIdentifier', nullable: true })
  plateIdentifier: string | null;

  @Column({ type: 'character varying', name: 'BodyNumber', nullable: true })
  bodyNumber: string | null;

  @Column({ type: 'character varying', name: 'EngineNumber', nullable: true })
  engineNumber: string | null;

  @Column({ type: 'character varying', name: 'OtherFeatures', nullable: true })
  otherFeatures: string | null;

  @Column({ type: 'character varying', name: 'Color', nullable: true })
  color: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'character varying', name: 'OwnerName', nullable: true })
  ownerName: string | null;

  @Column({ type: 'character varying', name: 'VoucherNo', nullable: true })
  voucherNo: string | null;

  @Column({ type: 'numeric', name: 'VolumeCapacity', nullable: true })
  volumeCapacity: number | null;

  @Column({ type: 'numeric', name: 'MinimumVolumeCapacity' })
  minimumVolumeCapacity: number;

  @Column({ type: 'bigint', name: 'VolumeCapacityUnitRef', nullable: true })
  volumeCapacityUnitRef: number | null;

}