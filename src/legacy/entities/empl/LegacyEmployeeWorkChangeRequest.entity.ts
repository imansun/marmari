import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeWorkChangeRequest' })
export class LegacyEmployeeWorkChangeRequest {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeWorkChangeRequestID' })
  employeeWorkChangeRequestID: number;

  @Column({ type: 'integer', name: 'WorkTypeCode' })
  workTypeCode: number;

  @Column({ type: 'character varying', name: 'OrgName' })
  orgName: string;

  @Column({ type: 'character varying', name: 'Role', nullable: true })
  role: string | null;

  @Column({ type: 'bigint', name: 'PostRef', nullable: true })
  postRef: number | null;

  @Column({ type: 'bigint', name: 'JobRef', nullable: true })
  jobRef: number | null;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef', nullable: true })
  employmentTypeRef: number | null;

  @Column({ type: 'bigint', name: 'DepartmentRef', nullable: true })
  departmentRef: number | null;

  @Column({ type: 'integer', name: 'WorkLocationCode', nullable: true })
  workLocationCode: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'integer', name: 'InsuranceDuration', nullable: true })
  insuranceDuration: number | null;

  @Column({ type: 'bigint', name: 'OrganizationRef', nullable: true })
  organizationRef: number | null;

  @Column({ type: 'bytea', name: 'FileContents', nullable: true })
  fileContents: Buffer | null;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'EmployeeWorkRef' })
  employeeWorkRef: number;

  @Column({ type: 'bigint', name: 'EmployeeInfoChangeRequestRef' })
  employeeInfoChangeRequestRef: number;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

}