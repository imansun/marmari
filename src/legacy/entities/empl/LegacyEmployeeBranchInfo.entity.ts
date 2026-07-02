import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeBranchInfo' })
export class LegacyEmployeeBranchInfo {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeBranchInfoID' })
  employeeBranchInfoID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

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

  @Column({ type: 'integer', name: 'EffectiveYearMonth' })
  effectiveYearMonth: number;

  @Column({ type: 'boolean', name: 'AgentFrom', default: false })
  agentFrom: boolean;

  @Column({ type: 'boolean', name: 'AgentTo', default: false })
  agentTo: boolean;

  @Column({ type: 'bigint', name: 'AgentFromRef', nullable: true })
  agentFromRef: number | null;

  @Column({ type: 'bigint', name: 'AgentToRef', nullable: true })
  agentToRef: number | null;

}