import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRetirementForm36' })
export class LegacyEmployeeRetirementForm36 {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRetirementForm36ID' })
  employeeRetirementForm36ID: number;

  @Column({ type: 'bigint', name: 'EmployeeRetirementFormRef' })
  employeeRetirementFormRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'integer', name: 'DayTime' })
  dayTime: number;

  @Column({ type: 'integer', name: 'DayTime2' })
  dayTime2: number;

  @Column({ type: 'character varying', name: 'OrganizationTitle' })
  organizationTitle: string;

  @Column({ type: 'integer', name: 'RetirementServiceType' })
  retirementServiceType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}