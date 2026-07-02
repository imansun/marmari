import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExpectationAppraisalDimension' })
export class LegacyExpectationAppraisalDimension {
  @PrimaryColumn({ type: 'bigint', name: 'ExpectationAppraisalDimensionID' })
  expectationAppraisalDimensionID: number;

  @Column({ type: 'bigint', name: 'ExpectationRef' })
  expectationRef: number;

  @Column({ type: 'bigint', name: 'ProcessEvaluationStepTypeRef' })
  processEvaluationStepTypeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}