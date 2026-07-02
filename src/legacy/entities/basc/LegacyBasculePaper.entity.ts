import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BasculePaper' })
export class LegacyBasculePaper {
  @PrimaryColumn({ type: 'bigint', name: 'BasculePaperID' })
  basculePaperID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'bigint', name: 'ShippingPointRef' })
  shippingPointRef: number;

  @Column({ type: 'bigint', name: 'LoadingPointRef', nullable: true })
  loadingPointRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'TransportationVehicleRef', nullable: true })
  transportationVehicleRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

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

  @Column({ type: 'integer', name: 'TransportationType' })
  transportationType: number;

  @Column({ type: 'integer', name: 'WeighingType' })
  weighingType: number;

  @Column({ type: 'integer', name: 'LoadingAndUnloadingState' })
  loadingAndUnloadingState: number;

  @Column({ type: 'bigint', name: 'RecipientOrDelivererRef', nullable: true })
  recipientOrDelivererRef: number | null;

  @Column({ type: 'character varying', name: 'TransportationVehiclePlateIdentifier' })
  transportationVehiclePlateIdentifier: string;

  @Column({ type: 'bigint', name: 'TransportationVehicleTypeRef', nullable: true })
  transportationVehicleTypeRef: number | null;

  @Column({ type: 'bigint', name: 'CarrierRef', nullable: true })
  carrierRef: number | null;

  @Column({ type: 'bigint', name: 'TransporterRef', nullable: true })
  transporterRef: number | null;

  @Column({ type: 'character varying', name: 'TransporterName', nullable: true })
  transporterName: string | null;

  @Column({ type: 'character varying', name: 'TransporterDrivingLicenseNumber', nullable: true })
  transporterDrivingLicenseNumber: string | null;

  @Column({ type: 'bigint', name: 'TransportationUnitRef', nullable: true })
  transportationUnitRef: number | null;

  @Column({ type: 'character varying', name: 'SealNumber', nullable: true })
  sealNumber: string | null;

}