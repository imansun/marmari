import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRelativeChangeRequest' })
export class LegacyEmployeeRelativeChangeRequest {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRelativeChangeRequestID' })
  employeeRelativeChangeRequestID: number;

  @Column({ type: 'character varying', name: 'FirstName' })
  firstName: string;

  @Column({ type: 'character varying', name: 'LastName', nullable: true })
  lastName: string | null;

  @Column({ type: 'integer', name: 'RelationCode' })
  relationCode: number;

  @Column({ type: 'character varying', name: 'FatherName', nullable: true })
  fatherName: string | null;

  @Column({ type: 'character varying', name: 'IDNumber', nullable: true })
  iDNumber: string | null;

  @Column({ type: 'character varying', name: 'NationalID' })
  nationalID: string;

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

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpiryDate', nullable: true })
  expiryDate: Date | null;

  @Column({ type: 'bytea', name: 'FileContents', nullable: true })
  fileContents: Buffer | null;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'EmployeeInfoChangeRequestRef' })
  employeeInfoChangeRequestRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRelativeRef' })
  employeeRelativeRef: number;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

}