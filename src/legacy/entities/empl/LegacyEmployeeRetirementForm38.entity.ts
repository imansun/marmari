import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRetirementForm38' })
export class LegacyEmployeeRetirementForm38 {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRetirementForm38ID' })
  employeeRetirementForm38ID: number;

  @Column({ type: 'bigint', name: 'EmployeeRetirementFormRef' })
  employeeRetirementFormRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'integer', name: 'DayTime' })
  dayTime: number;

  @Column({ type: 'character varying', name: 'OrganizationTitle' })
  organizationTitle: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}