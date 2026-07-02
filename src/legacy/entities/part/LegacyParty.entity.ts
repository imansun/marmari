import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Party' })
export class LegacyParty {
  @PrimaryColumn({ type: 'bigint', name: 'PartyID' })
  partyID: number;

  @Column({ type: 'integer', name: 'Title', nullable: true })
  title: number | null;

  @Column({ type: 'character varying', name: 'FirstName', nullable: true })
  firstName: string | null;

  @Column({ type: 'character varying', name: 'LastName', nullable: true })
  lastName: string | null;

  @Column({ type: 'character varying', name: 'FullName', nullable: true })
  fullName: string | null;

  @Column({ type: 'character varying', name: 'Alias', nullable: true })
  alias: string | null;

  @Column({ type: 'character varying', name: 'NationalID', nullable: true })
  nationalID: string | null;

  @Column({ type: 'integer', name: 'Gender', nullable: true })
  gender: number | null;

  @Column({ type: 'character varying', name: 'Nationality', nullable: true })
  nationality: string | null;

  @Column({ type: 'character varying', name: 'Allegiance', nullable: true })
  allegiance: string | null;

  @Column({ type: 'integer', name: 'Religion', nullable: true })
  religion: number | null;

  @Column({ type: 'integer', name: 'Subreligion', nullable: true })
  subreligion: number | null;

  @Column({ type: 'character varying', name: 'Mobile', nullable: true })
  mobile: string | null;

  @Column({ type: 'character varying', name: 'Email', nullable: true })
  email: string | null;

  @Column({ type: 'character varying', name: 'IDNumber', nullable: true })
  iDNumber: string | null;

  @Column({ type: 'character varying', name: 'IDSerial', nullable: true })
  iDSerial: string | null;

  @Column({ type: 'character varying', name: 'FatherName', nullable: true })
  fatherName: string | null;

  @Column({ type: 'bigint', name: 'BirthPlaceRef', nullable: true })
  birthPlaceRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'BirthDate', nullable: true })
  birthDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'IssuanceDate', nullable: true })
  issuanceDate: Date | null;

  @Column({ type: 'bigint', name: 'IssuancePlaceRef', nullable: true })
  issuancePlaceRef: number | null;

  @Column({ type: 'character varying', name: 'CompanyCode', nullable: true })
  companyCode: string | null;

  @Column({ type: 'character', name: 'Abbreviation', nullable: true })
  abbreviation: string | null;

  @Column({ type: 'character varying', name: 'EconomicCode', nullable: true })
  economicCode: string | null;

  @Column({ type: 'character varying', name: 'RegistrationCode', nullable: true })
  registrationCode: string | null;

  @Column({ type: 'integer', name: 'CompanyType', nullable: true })
  companyType: number | null;

  @Column({ type: 'character varying', name: 'ActivityType', nullable: true })
  activityType: string | null;

  @Column({ type: 'character varying', name: 'Website', nullable: true })
  website: string | null;

  @Column({ type: 'character varying', name: 'ReferenceCompany', nullable: true })
  referenceCompany: string | null;

  @Column({ type: 'character varying', name: 'Group', nullable: true })
  group: string | null;

  @Column({ type: 'character varying', name: 'CompanyName', nullable: true })
  companyName: string | null;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'FirstName_EN', nullable: true })
  firstNameEn: string | null;

  @Column({ type: 'character varying', name: 'LastName_EN', nullable: true })
  lastNameEn: string | null;

  @Column({ type: 'character varying', name: 'CompanyName_EN', nullable: true })
  companyNameEn: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'character varying', name: 'Tel', nullable: true })
  tel: string | null;

  @Column({ type: 'integer', name: 'MaritalStatus', nullable: true })
  maritalStatus: number | null;

  @Column({ type: 'integer', name: 'EducationDegree', nullable: true })
  educationDegree: number | null;

  @Column({ type: 'timestamp without time zone', name: 'MarriageDate', nullable: true })
  marriageDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'VATCertificateValidityDate', nullable: true })
  vATCertificateValidityDate: Date | null;

  @Column({ type: 'boolean', name: 'IsPharmaceuticalSupplier', default: false })
  isPharmaceuticalSupplier: boolean;

  @Column({ type: 'character varying', name: 'FidaRegistration', nullable: true })
  fidaRegistration: string | null;

  @Column({ type: 'character varying', name: 'FullName_EN', nullable: true })
  fullNameEn: string | null;

}