import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TrainingFactorProperty' })
export class LegacyTrainingFactorProperty {
  @PrimaryColumn({ type: 'bigint', name: 'TrainingFactorPropertyID' })
  trainingFactorPropertyID: number;

  @Column({ type: 'bigint', name: 'TrainingFactorRef' })
  trainingFactorRef: number;

  @Column({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

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

}