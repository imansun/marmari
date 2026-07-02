import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeDataAccess' })
export class LegacyEmployeeDataAccess {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeDataAccessID' })
  employeeDataAccessID: number;

  @Column({ type: 'bigint', name: 'ActorRef' })
  actorRef: number;

  @Column({ type: 'integer', name: 'ActorTypeCode' })
  actorTypeCode: number;

  @Column({ type: 'character varying', name: 'ResourceKey' })
  resourceKey: string;

  @Column({ type: 'integer', name: 'OperatorCode', nullable: true })
  operatorCode: number | null;

  @Column({ type: 'integer', name: 'AccessTypeCode' })
  accessTypeCode: number;

  @Column({ type: 'integer', name: 'TargetSetTypeCode' })
  targetSetTypeCode: number;

  @Column({ type: 'bigint', name: 'PostRef', nullable: true })
  postRef: number | null;

  @Column({ type: 'character varying', name: 'PostTitle', nullable: true })
  postTitle: string | null;

  @Column({ type: 'bigint', name: 'DepartmentRef', nullable: true })
  departmentRef: number | null;

  @Column({ type: 'character varying', name: 'DepartmentTitle', nullable: true })
  departmentTitle: string | null;

  @Column({ type: 'bigint', name: 'BranchRef', nullable: true })
  branchRef: number | null;

  @Column({ type: 'character varying', name: 'BranchTitle', nullable: true })
  branchTitle: string | null;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef', nullable: true })
  employmentTypeRef: number | null;

  @Column({ type: 'character varying', name: 'EmploymentTypeTitle', nullable: true })
  employmentTypeTitle: string | null;

  @Column({ type: 'bigint', name: 'EmployeeRef', nullable: true })
  employeeRef: number | null;

  @Column({ type: 'character varying', name: 'EmployeeTitle', nullable: true })
  employeeTitle: string | null;

  @Column({ type: 'integer', name: 'WorkLocationCode', nullable: true })
  workLocationCode: number | null;

  @Column({ type: 'character varying', name: 'WorkLocationTitle', nullable: true })
  workLocationTitle: string | null;

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

  @Column({ type: 'integer', name: 'EmployeeStatusCode', nullable: true })
  employeeStatusCode: number | null;

  @Column({ type: 'character varying', name: 'EmployeeStatusTitle', nullable: true })
  employeeStatusTitle: string | null;

  @Column({ type: 'bigint', name: 'AgentFromRef', nullable: true })
  agentFromRef: number | null;

  @Column({ type: 'character varying', name: 'AgentFromTitle', nullable: true })
  agentFromTitle: string | null;

  @Column({ type: 'bigint', name: 'AgentToRef', nullable: true })
  agentToRef: number | null;

  @Column({ type: 'character varying', name: 'AgentToTitle', nullable: true })
  agentToTitle: string | null;

}