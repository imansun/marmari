import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Cargo' })
export class LegacyCargo {
  @PrimaryColumn({ type: 'bigint', name: 'CargoID' })
  cargoID: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'ProformaRef' })
  proformaRef: number;

  @Column({ type: 'integer', name: 'TransportationType' })
  transportationType: number;

  @Column({ type: 'character varying', name: 'BookingNumber', nullable: true })
  bookingNumber: string | null;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'bigint', name: 'ShippingPointRef', nullable: true })
  shippingPointRef: number | null;

  @Column({ type: 'bigint', name: 'LoadingPointRef', nullable: true })
  loadingPointRef: number | null;

  @Column({ type: 'integer', name: 'DeliveryPlaceType' })
  deliveryPlaceType: number;

  @Column({ type: 'bigint', name: 'DeliveryPlaceRef' })
  deliveryPlaceRef: number;

  @Column({ type: 'integer', name: 'DestinationPlaceType', nullable: true })
  destinationPlaceType: number | null;

  @Column({ type: 'bigint', name: 'DestinationPlaceRef', nullable: true })
  destinationPlaceRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'TransportationVehicleArrivalDate', nullable: true })
  transportationVehicleArrivalDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'LoadingIntervalStartDate', nullable: true })
  loadingIntervalStartDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'LoadingIntervalEndDate', nullable: true })
  loadingIntervalEndDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'LastAcceptableShippingDate', nullable: true })
  lastAcceptableShippingDate: Date | null;

  @Column({ type: 'bigint', name: 'CarrierRef' })
  carrierRef: number;

  @Column({ type: 'bigint', name: 'ForwarderRef', nullable: true })
  forwarderRef: number | null;

  @Column({ type: 'bigint', name: 'InspectionCompanyRef', nullable: true })
  inspectionCompanyRef: number | null;

  @Column({ type: 'bigint', name: 'CustomRef' })
  customRef: number;

  @Column({ type: 'boolean', name: 'NeedsContainerRegistration' })
  needsContainerRegistration: boolean;

  @Column({ type: 'bigint', name: 'ContainerTypeRef', nullable: true })
  containerTypeRef: number | null;

  @Column({ type: 'integer', name: 'ContainerCount', nullable: true })
  containerCount: number | null;

  @Column({ type: 'bigint', name: 'TransportationVehicleTypeRef' })
  transportationVehicleTypeRef: number;

  @Column({ type: 'integer', name: 'TransportationVehicleCount', nullable: true })
  transportationVehicleCount: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'WeightUnitRef' })
  weightUnitRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

}