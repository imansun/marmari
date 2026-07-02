import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportationManagementPortalAssignment' })
export class LegacyTransportationManagementPortalAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'TransportationManagementPortalAssignmentID' })
  transportationManagementPortalAssignmentID: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'bigint', name: 'TransportationVehicleTypeRef' })
  transportationVehicleTypeRef: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleRef', nullable: true })
  transportationVehicleRef: number | null;

  @Column({ type: 'bigint', name: 'TransporterRef', nullable: true })
  transporterRef: number | null;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'character varying', name: 'TransportationVehiclePlateIdentifier', nullable: true })
  transportationVehiclePlateIdentifier: string | null;

  @Column({ type: 'character varying', name: 'TransporterName', nullable: true })
  transporterName: string | null;

  @Column({ type: 'character varying', name: 'TransporterDrivingLicenseNumber', nullable: true })
  transporterDrivingLicenseNumber: string | null;

  @Column({ type: 'character varying', name: 'TransporterPhone', nullable: true })
  transporterPhone: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'character varying', name: 'LadingNumber', nullable: true })
  ladingNumber: string | null;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

}