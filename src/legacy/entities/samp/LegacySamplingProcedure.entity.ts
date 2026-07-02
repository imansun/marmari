import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SamplingProcedure' })
export class LegacySamplingProcedure {
  @PrimaryColumn({ type: 'bigint', name: 'SamplingProcedureID' })
  samplingProcedureID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'SamplingType' })
  samplingType: number;

  @Column({ type: 'bigint', name: 'SamplingTableRef', nullable: true })
  samplingTableRef: number | null;

  @Column({ type: 'integer', name: 'EvaluationMethod' })
  evaluationMethod: number;

  @Column({ type: 'numeric', name: 'SampleSize', nullable: true })
  sampleSize: number | null;

  @Column({ type: 'numeric', name: 'AcceptanceValue', nullable: true })
  acceptanceValue: number | null;

  @Column({ type: 'integer', name: 'SamplingPlan', nullable: true })
  samplingPlan: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}