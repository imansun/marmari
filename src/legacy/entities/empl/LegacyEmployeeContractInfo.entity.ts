import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeContractInfo' })
export class LegacyEmployeeContractInfo {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeContractInfoID' })
  employeeContractInfoID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}