import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeBranchInfoCondition' })
export class LegacyEmployeeBranchInfoCondition {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeBranchInfoConditionID' })
  employeeBranchInfoConditionID: number;

  @Column({ type: 'bigint', name: 'EmployeeBranchInfoRef' })
  employeeBranchInfoRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'Module' })
  module: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}