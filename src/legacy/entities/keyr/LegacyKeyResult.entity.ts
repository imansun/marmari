import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'KeyResult' })
export class LegacyKeyResult {
  @PrimaryColumn({ type: 'bigint', name: 'KeyResultID' })
  keyResultID: number;

  @Column({ type: 'bigint', name: 'ExpectationRef' })
  expectationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Accessiblity' })
  accessiblity: number;

  @Column({ type: 'integer', name: 'MeasurePattern' })
  measurePattern: number;

  @Column({ type: 'character varying', name: 'InitialValue', nullable: true })
  initialValue: string | null;

  @Column({ type: 'character varying', name: 'TargetValue', nullable: true })
  targetValue: string | null;

  @Column({ type: 'character varying', name: 'CurrentValue', nullable: true })
  currentValue: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'CurrentValueDescription', nullable: true })
  currentValueDescription: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CurrentValueModificationDate', nullable: true })
  currentValueModificationDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'PunchInDate', nullable: true })
  punchInDate: Date | null;

}