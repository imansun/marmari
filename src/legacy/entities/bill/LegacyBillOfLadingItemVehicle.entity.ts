import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BillOfLadingItemVehicle' })
export class LegacyBillOfLadingItemVehicle {
  @PrimaryColumn({ type: 'bigint', name: 'BillOfLadingItemVehicleID' })
  billOfLadingItemVehicleID: number;

  @Column({ type: 'bigint', name: 'BillOfLadingItemRef' })
  billOfLadingItemRef: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleRef', nullable: true })
  transportationVehicleRef: number | null;

  @Column({ type: 'bigint', name: 'TransportationVehicleTypeRef', nullable: true })
  transportationVehicleTypeRef: number | null;

  @Column({ type: 'character varying', name: 'TransportationVehiclePlateIdentifier', nullable: true })
  transportationVehiclePlateIdentifier: string | null;

  @Column({ type: 'bigint', name: 'VehicleReferenceEntityCode', nullable: true })
  vehicleReferenceEntityCode: number | null;

  @Column({ type: 'bigint', name: 'VehicleReferenceRef', nullable: true })
  vehicleReferenceRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'PackageCount', nullable: true })
  packageCount: number | null;

  @Column({ type: 'bigint', name: 'IncomingContainerItemRef', nullable: true })
  incomingContainerItemRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}