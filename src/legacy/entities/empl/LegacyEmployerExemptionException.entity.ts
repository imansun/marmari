import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployerExemptionException' })
export class LegacyEmployerExemptionException {
  @PrimaryColumn({ type: 'bigint', name: 'EmployerExemptionExceptionID' })
  employerExemptionExceptionID: number;

  @Column({ type: 'bigint', name: 'OrganizationBranchRef' })
  organizationBranchRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'StartYearMonth' })
  startYearMonth: number;

  @Column({ type: 'integer', name: 'EndYearMonth', nullable: true })
  endYearMonth: number | null;

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