import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeConditionItem' })
export class LegacyEmployeeConditionItem {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeConditionItemID' })
  employeeConditionItemID: number;

  @Column({ type: 'bigint', name: 'EmployeeConditionRef' })
  employeeConditionRef: number;

  @Column({ type: 'integer', name: 'OperatorCode', nullable: true })
  operatorCode: number | null;

  @Column({ type: 'integer', name: 'AccessTypeCode' })
  accessTypeCode: number;

  @Column({ type: 'integer', name: 'TargetSetTypeCode' })
  targetSetTypeCode: number;

  @Column({ type: 'bigint', name: 'PostRef', nullable: true })
  postRef: number | null;

  @Column({ type: 'bigint', name: 'DepartmentRef', nullable: true })
  departmentRef: number | null;

  @Column({ type: 'bigint', name: 'BranchRef', nullable: true })
  branchRef: number | null;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef', nullable: true })
  employmentTypeRef: number | null;

  @Column({ type: 'bigint', name: 'EmployeeRef', nullable: true })
  employeeRef: number | null;

  @Column({ type: 'integer', name: 'WorkLocationCode', nullable: true })
  workLocationCode: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'EmployeeStatusCode', nullable: true })
  employeeStatusCode: number | null;

  @Column({ type: 'bigint', name: 'AgentFromRef', nullable: true })
  agentFromRef: number | null;

  @Column({ type: 'bigint', name: 'AgentToRef', nullable: true })
  agentToRef: number | null;

  @Column({ type: 'integer', name: 'SecondaryTargetSetTypeCode', nullable: true })
  secondaryTargetSetTypeCode: number | null;

}