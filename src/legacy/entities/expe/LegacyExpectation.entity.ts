import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Expectation' })
export class LegacyExpectation {
  @PrimaryColumn({ type: 'bigint', name: 'ExpectationID' })
  expectationID: number;

  @Column({ type: 'bigint', name: 'PerformanceAgreementRef' })
  performanceAgreementRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'DueDate', nullable: true })
  dueDate: Date | null;

  @Column({ type: 'integer', name: 'Weightage', nullable: true })
  weightage: number | null;

  @Column({ type: 'integer', name: 'Accessiblity', nullable: true })
  accessiblity: number | null;

  @Column({ type: 'integer', name: 'MeasurePattern', nullable: true })
  measurePattern: number | null;

  @Column({ type: 'character varying', name: 'InitialValue', nullable: true })
  initialValue: string | null;

  @Column({ type: 'character varying', name: 'TargetValue', nullable: true })
  targetValue: string | null;

  @Column({ type: 'character varying', name: 'CurrentValue', nullable: true })
  currentValue: string | null;

  @Column({ type: 'character varying', name: 'CurrentState', nullable: true })
  currentState: string | null;

  @Column({ type: 'character varying', name: 'ObjectiveTitle', nullable: true })
  objectiveTitle: string | null;

  @Column({ type: 'character varying', name: 'CompetencyTitle', nullable: true })
  competencyTitle: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'CurrentValueDescription', nullable: true })
  currentValueDescription: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CurrentValueModificationDate', nullable: true })
  currentValueModificationDate: Date | null;

  @Column({ type: 'bigint', name: 'IndicatorRef', nullable: true })
  indicatorRef: number | null;

  @Column({ type: 'integer', name: 'Order', nullable: true })
  order: number | null;

  @Column({ type: 'timestamp without time zone', name: 'PunchInDate', nullable: true })
  punchInDate: Date | null;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

}