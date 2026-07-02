import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeePriorPeriod' })
export class LegacyEmployeePriorPeriod {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeePriorPeriodID' })
  employeePriorPeriodID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'CompensationCalcSubTypeCode' })
  compensationCalcSubTypeCode: number;

  @Column({ type: 'numeric', name: 'DeploymentAmount' })
  deploymentAmount: number;

  @Column({ type: 'integer', name: 'CalcYearMonth' })
  calcYearMonth: number;

  @Column({ type: 'integer', name: 'BaseCalcYearMonth' })
  baseCalcYearMonth: number;

  @Column({ type: 'boolean', name: 'IsManual' })
  isManual: boolean;

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