import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRelativeInsurance' })
export class LegacyEmployeeRelativeInsurance {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRelativeInsuranceID' })
  employeeRelativeInsuranceID: number;

  @Column({ type: 'bigint', name: 'EmployeeRelativeRef' })
  employeeRelativeRef: number;

  @Column({ type: 'bigint', name: 'OrganizationRef' })
  organizationRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'character varying', name: 'InsuranceNumber', nullable: true })
  insuranceNumber: string | null;

  @Column({ type: 'boolean', name: 'IsSurety' })
  isSurety: boolean;

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

}