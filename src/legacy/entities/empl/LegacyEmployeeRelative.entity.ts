import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRelative' })
export class LegacyEmployeeRelative {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRelativeID' })
  employeeRelativeID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'FirstName' })
  firstName: string;

  @Column({ type: 'character varying', name: 'LastName', nullable: true })
  lastName: string | null;

  @Column({ type: 'character varying', name: 'FatherName', nullable: true })
  fatherName: string | null;

  @Column({ type: 'integer', name: 'RelationCode' })
  relationCode: number;

  @Column({ type: 'character varying', name: 'NationalID' })
  nationalID: string;

  @Column({ type: 'character varying', name: 'IDNumber', nullable: true })
  iDNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'BirthDate' })
  birthDate: Date;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef', nullable: true })
  regionalDivisionRef: number | null;

  @Column({ type: 'integer', name: 'DegreeCode', nullable: true })
  degreeCode: number | null;

  @Column({ type: 'integer', name: 'EducationStateCode', nullable: true })
  educationStateCode: number | null;

  @Column({ type: 'integer', name: 'PhysicalStateCode', nullable: true })
  physicalStateCode: number | null;

  @Column({ type: 'integer', name: 'MaritalStatusCode', nullable: true })
  maritalStatusCode: number | null;

  @Column({ type: 'character varying', name: 'Job', nullable: true })
  job: string | null;

  @Column({ type: 'character varying', name: 'Address', nullable: true })
  address: string | null;

  @Column({ type: 'boolean', name: 'IsFourthChild' })
  isFourthChild: boolean;

  @Column({ type: 'boolean', name: 'IncludeInSonshipPay' })
  includeInSonshipPay: boolean;

  @Column({ type: 'timestamp without time zone', name: 'ExpiryDate', nullable: true })
  expiryDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'bytea', name: 'FileContents', nullable: true })
  fileContents: Buffer | null;

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

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'integer', name: 'AllegianceCode', default: 1 })
  allegianceCode: number;

  @Column({ type: 'timestamp without time zone', name: 'AnnouncingDate', nullable: true })
  announcingDate: Date | null;

  @Column({ type: 'integer', name: 'EmployeeRelativeExtra1Code', nullable: true })
  employeeRelativeExtra1Code: number | null;

  @Column({ type: 'numeric', name: 'DutySalaryShare', nullable: true })
  dutySalaryShare: number | null;

  @Column({ type: 'integer', name: 'RelativeType', default: 1 })
  relativeType: number;

  @Column({ type: 'bigint', name: 'ParentEmployeeRef', nullable: true })
  parentEmployeeRef: number | null;

}