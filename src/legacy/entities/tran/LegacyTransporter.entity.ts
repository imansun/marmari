import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Transporter' })
export class LegacyTransporter {
  @PrimaryColumn({ type: 'bigint', name: 'TransporterID' })
  transporterID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'bigint', name: 'CarrierRef', nullable: true })
  carrierRef: number | null;

  @Column({ type: 'bigint', name: 'TransportationUnitRef', nullable: true })
  transportationUnitRef: number | null;

  @Column({ type: 'character varying', name: 'DrivingLicenseNumber' })
  drivingLicenseNumber: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'CertificateType', nullable: true })
  certificateType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'DrivingLicenseIssueDate', nullable: true })
  drivingLicenseIssueDate: Date | null;

  @Column({ type: 'smallint', name: 'DrivingLicenseValidationPeriod', nullable: true })
  drivingLicenseValidationPeriod: number | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'character varying', name: 'FirstName' })
  firstName: string;

  @Column({ type: 'character varying', name: 'LastName' })
  lastName: string;

  @Column({ type: 'character varying', name: 'FatherName', nullable: true })
  fatherName: string | null;

  @Column({ type: 'character varying', name: 'RegistrationNo', nullable: true })
  registrationNo: string | null;

  @Column({ type: 'character varying', name: 'NationalCode', nullable: true })
  nationalCode: string | null;

  @Column({ type: 'character', name: 'TelNumber', nullable: true })
  telNumber: string | null;

  @Column({ type: 'character varying', name: 'Address', nullable: true })
  address: string | null;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

}