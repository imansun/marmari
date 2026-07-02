import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkOrderProblemFailureConsequence' })
export class LegacyWorkOrderProblemFailureConsequence {
  @PrimaryColumn({ type: 'bigint', name: 'WorkOrderProblemFailureConsequenceID' })
  workOrderProblemFailureConsequenceID: number;

  @Column({ type: 'bigint', name: 'WorkOrderProblemRef' })
  workOrderProblemRef: number;

  @Column({ type: 'bigint', name: 'FailureConsequenceRef' })
  failureConsequenceRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}