import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeInfoChangeRequest' })
export class LegacyEmployeeInfoChangeRequest {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeInfoChangeRequestID' })
  employeeInfoChangeRequestID: number;

  @Column({ type: 'integer', name: 'RequestTypeCode' })
  requestTypeCode: number;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate' })
  requestDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Outcome', nullable: true })
  outcome: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'boolean', name: 'FromSelfService' })
  fromSelfService: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'integer', name: 'MilitaryServiceStatusCode', nullable: true })
  militaryServiceStatusCode: number | null;

  @Column({ type: 'integer', name: 'ExemptionTypeCode', nullable: true })
  exemptionTypeCode: number | null;

  @Column({ type: 'timestamp without time zone', name: 'MilitaryStartDate', nullable: true })
  militaryStartDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'MilitaryEndDate', nullable: true })
  militaryEndDate: Date | null;

  @Column({ type: 'integer', name: 'MilitaryDuration', nullable: true })
  militaryDuration: number | null;

  @Column({ type: 'integer', name: 'MilitaryEducationDegreeCode', nullable: true })
  militaryEducationDegreeCode: number | null;

  @Column({ type: 'character varying', name: 'FirstName', nullable: true })
  firstName: string | null;

  @Column({ type: 'character varying', name: 'LastName', nullable: true })
  lastName: string | null;

  @Column({ type: 'character varying', name: 'FatherName', nullable: true })
  fatherName: string | null;

  @Column({ type: 'character varying', name: 'NationalID', nullable: true })
  nationalID: string | null;

  @Column({ type: 'character varying', name: 'IDNumber', nullable: true })
  iDNumber: string | null;

  @Column({ type: 'character varying', name: 'IDSerial', nullable: true })
  iDSerial: string | null;

  @Column({ type: 'integer', name: 'Gender', nullable: true })
  gender: number | null;

  @Column({ type: 'timestamp without time zone', name: 'BirthDate', nullable: true })
  birthDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'IssuanceDate', nullable: true })
  issuanceDate: Date | null;

  @Column({ type: 'bigint', name: 'BirthPlaceRef', nullable: true })
  birthPlaceRef: number | null;

  @Column({ type: 'bigint', name: 'IssuancePlaceRef', nullable: true })
  issuancePlaceRef: number | null;

  @Column({ type: 'character varying', name: 'Nationality', nullable: true })
  nationality: string | null;

  @Column({ type: 'character varying', name: 'Email', nullable: true })
  email: string | null;

  @Column({ type: 'character varying', name: 'Mobile', nullable: true })
  mobile: string | null;

  @Column({ type: 'character varying', name: 'MilitaryAttachmentFileName', nullable: true })
  militaryAttachmentFileName: string | null;

  @Column({ type: 'bytea', name: 'MilitaryAttachment', nullable: true })
  militaryAttachment: Buffer | null;

  @Column({ type: 'bytea', name: 'Photo', nullable: true })
  photo: Buffer | null;

  @Column({ type: 'bytea', name: 'Signature', nullable: true })
  signature: Buffer | null;

}