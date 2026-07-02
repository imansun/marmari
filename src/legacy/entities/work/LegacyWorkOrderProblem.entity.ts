import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkOrderProblem' })
export class LegacyWorkOrderProblem {
  @PrimaryColumn({ type: 'bigint', name: 'WorkOrderProblemID' })
  workOrderProblemID: number;

  @Column({ type: 'bigint', name: 'WorkOrderRef' })
  workOrderRef: number;

  @Column({ type: 'bigint', name: 'ProblemGroupRef' })
  problemGroupRef: number;

  @Column({ type: 'bigint', name: 'ProblemRef' })
  problemRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'FailureDetectionMethodTypeMethodRef', nullable: true })
  failureDetectionMethodTypeMethodRef: number | null;

  @Column({ type: 'bigint', name: 'FailureLikelihoodRef', nullable: true })
  failureLikelihoodRef: number | null;

}