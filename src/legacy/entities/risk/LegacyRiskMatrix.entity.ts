import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RiskMatrix' })
export class LegacyRiskMatrix {
  @PrimaryColumn({ type: 'bigint', name: 'RiskMatrixID' })
  riskMatrixID: number;

  @Column({ type: 'bigint', name: 'FailureConsequenceRef' })
  failureConsequenceRef: number;

  @Column({ type: 'bigint', name: 'FailureLikelihoodRef' })
  failureLikelihoodRef: number;

  @Column({ type: 'integer', name: 'Risk', nullable: true })
  risk: number | null;

  @Column({ type: 'integer', name: 'Priority', nullable: true })
  priority: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}