import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShippingOrder' })
export class LegacyShippingOrder {
  @PrimaryColumn({ type: 'bigint', name: 'ShippingOrderID' })
  shippingOrderID: number;

  @Column({ type: 'integer', name: 'LoadingType' })
  loadingType: number;

  @Column({ type: 'bigint', name: 'ShippingPointRef', nullable: true })
  shippingPointRef: number | null;

  @Column({ type: 'bigint', name: 'LoadingPointRef', nullable: true })
  loadingPointRef: number | null;

  @Column({ type: 'bigint', name: 'TransportationSequenceRef', nullable: true })
  transportationSequenceRef: number | null;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

  @Column({ type: 'bigint', name: 'CarrierRef', nullable: true })
  carrierRef: number | null;

  @Column({ type: 'bigint', name: 'TransporterRef', nullable: true })
  transporterRef: number | null;

  @Column({ type: 'character varying', name: 'TransporterName', nullable: true })
  transporterName: string | null;

  @Column({ type: 'character varying', name: 'TransporterDrivingLicenseNumber', nullable: true })
  transporterDrivingLicenseNumber: string | null;

  @Column({ type: 'bigint', name: 'TransportationVehicleRef', nullable: true })
  transportationVehicleRef: number | null;

  @Column({ type: 'bigint', name: 'TransportationVehicleTypeRef', nullable: true })
  transportationVehicleTypeRef: number | null;

  @Column({ type: 'character varying', name: 'TransportationVehiclePlateIdentifier' })
  transportationVehiclePlateIdentifier: string;

  @Column({ type: 'bigint', name: 'TransportationUnitRef', nullable: true })
  transportationUnitRef: number | null;

  @Column({ type: 'bigint', name: 'RecipientRef', nullable: true })
  recipientRef: number | null;

  @Column({ type: 'boolean', name: 'HasBasculePaper' })
  hasBasculePaper: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'numeric', name: 'ControlableVehicleWeightCapacity' })
  controlableVehicleWeightCapacity: number;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'integer', name: 'PreviousState', nullable: true })
  previousState: number | null;

  @Column({ type: 'integer', name: 'WeighingType', nullable: true })
  weighingType: number | null;

  @Column({ type: 'character varying', name: 'LadingNumber', nullable: true })
  ladingNumber: string | null;

  @Column({ type: 'boolean', name: 'LadingNumberIsFixed', default: false })
  ladingNumberIsFixed: boolean;

}