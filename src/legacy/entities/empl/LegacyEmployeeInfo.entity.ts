import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeInfo' })
export class LegacyEmployeeInfo {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeInfoID' })
  employeeInfoID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'FirstName' })
  firstName: string;

  @Column({ type: 'character varying', name: 'LastName' })
  lastName: string;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'integer', name: 'StartYearMonth' })
  startYearMonth: number;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'integer', name: 'EndYearMonth', nullable: true })
  endYearMonth: number | null;

  @Column({ type: 'boolean', name: 'HasOriginalEndDate' })
  hasOriginalEndDate: boolean;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef', nullable: true })
  employmentTypeRef: number | null;

  @Column({ type: 'bigint', name: 'StatuteTypeRef', nullable: true })
  statuteTypeRef: number | null;

  @Column({ type: 'bigint', name: 'PostRef', nullable: true })
  postRef: number | null;

  @Column({ type: 'bigint', name: 'DepartmentRef', nullable: true })
  departmentRef: number | null;

  @Column({ type: 'bigint', name: 'JobRef', nullable: true })
  jobRef: number | null;

  @Column({ type: 'integer', name: 'WorkLocation', nullable: true })
  workLocation: number | null;

  @Column({ type: 'integer', name: 'Rank', nullable: true })
  rank: number | null;

  @Column({ type: 'integer', name: 'Base', nullable: true })
  base: number | null;

  @Column({ type: 'integer', name: 'EmployeeStatuteStatus', nullable: true })
  employeeStatuteStatus: number | null;

  @Column({ type: 'integer', name: 'AfterIssueStatus', nullable: true })
  afterIssueStatus: number | null;

  @Column({ type: 'integer', name: 'IssueTime', nullable: true })
  issueTime: number | null;

  @Column({ type: 'bigint', name: 'BranchRef', nullable: true })
  branchRef: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef1', nullable: true })
  dLTypeRef1: number | null;

  @Column({ type: 'bigint', name: 'DLRef1', nullable: true })
  dLRef1: number | null;

  @Column({ type: 'character varying', name: 'DLCode1', nullable: true })
  dLCode1: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef2', nullable: true })
  dLTypeRef2: number | null;

  @Column({ type: 'bigint', name: 'DLRef2', nullable: true })
  dLRef2: number | null;

  @Column({ type: 'character varying', name: 'DLCode2', nullable: true })
  dLCode2: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef3', nullable: true })
  dLTypeRef3: number | null;

  @Column({ type: 'bigint', name: 'DLRef3', nullable: true })
  dLRef3: number | null;

  @Column({ type: 'character varying', name: 'DLCode3', nullable: true })
  dLCode3: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef4', nullable: true })
  dLTypeRef4: number | null;

  @Column({ type: 'bigint', name: 'DLRef4', nullable: true })
  dLRef4: number | null;

  @Column({ type: 'character varying', name: 'DLCode4', nullable: true })
  dLCode4: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef5', nullable: true })
  dLTypeRef5: number | null;

  @Column({ type: 'bigint', name: 'DLRef5', nullable: true })
  dLRef5: number | null;

  @Column({ type: 'character varying', name: 'DLCode5', nullable: true })
  dLCode5: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef6', nullable: true })
  dLTypeRef6: number | null;

  @Column({ type: 'bigint', name: 'DLRef6', nullable: true })
  dLRef6: number | null;

  @Column({ type: 'character varying', name: 'DLCode6', nullable: true })
  dLCode6: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef7', nullable: true })
  dLTypeRef7: number | null;

  @Column({ type: 'bigint', name: 'DLRef7', nullable: true })
  dLRef7: number | null;

  @Column({ type: 'character varying', name: 'DLCode7', nullable: true })
  dLCode7: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef8', nullable: true })
  dLTypeRef8: number | null;

  @Column({ type: 'bigint', name: 'DLRef8', nullable: true })
  dLRef8: number | null;

  @Column({ type: 'character varying', name: 'DLCode8', nullable: true })
  dLCode8: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef9', nullable: true })
  dLTypeRef9: number | null;

  @Column({ type: 'bigint', name: 'DLRef9', nullable: true })
  dLRef9: number | null;

  @Column({ type: 'character varying', name: 'DLCode9', nullable: true })
  dLCode9: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef10', nullable: true })
  dLTypeRef10: number | null;

  @Column({ type: 'bigint', name: 'DLRef10', nullable: true })
  dLRef10: number | null;

  @Column({ type: 'character varying', name: 'DLCode10', nullable: true })
  dLCode10: string | null;

  @Column({ type: 'bigint', name: 'InsuranceOrganizationRef', nullable: true })
  insuranceOrganizationRef: number | null;

  @Column({ type: 'bigint', name: 'InsuranceOrganizationBranchRef', nullable: true })
  insuranceOrganizationBranchRef: number | null;

  @Column({ type: 'integer', name: 'InsuranceContract', nullable: true })
  insuranceContract: number | null;

  @Column({ type: 'bigint', name: 'TaxOrganizationRef', nullable: true })
  taxOrganizationRef: number | null;

  @Column({ type: 'bigint', name: 'TaxOrganizationBranchRef', nullable: true })
  taxOrganizationBranchRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}