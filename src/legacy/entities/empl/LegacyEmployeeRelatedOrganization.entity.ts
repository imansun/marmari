import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRelatedOrganization' })
export class LegacyEmployeeRelatedOrganization {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRelatedOrganizationID' })
  employeeRelatedOrganizationID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'OrganizationBranchRef' })
  organizationBranchRef: number;

  @Column({ type: 'bigint', name: 'OrganizationRef' })
  organizationRef: number;

  @Column({ type: 'boolean', name: 'IsInsurance' })
  isInsurance: boolean;

  @Column({ type: 'integer', name: 'InsuranceContractCode', nullable: true })
  insuranceContractCode: number | null;

  @Column({ type: 'integer', name: 'TaxGroupCode', nullable: true })
  taxGroupCode: number | null;

  @Column({ type: 'integer', name: 'TaxCalculationTypeCode', nullable: true })
  taxCalculationTypeCode: number | null;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'integer', name: 'EffectiveYearMonth' })
  effectiveYearMonth: number;

  @Column({ type: 'integer', name: 'ExpiryYearMonth', nullable: true })
  expiryYearMonth: number | null;

  @Column({ type: 'integer', name: 'InsuranceType', nullable: true })
  insuranceType: number | null;

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

  @Column({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpiryDate', nullable: true })
  expiryDate: Date | null;

}