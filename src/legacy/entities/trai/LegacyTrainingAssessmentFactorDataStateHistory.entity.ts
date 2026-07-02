import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TrainingAssessmentFactorDataStateHistory' })
export class LegacyTrainingAssessmentFactorDataStateHistory {
  @PrimaryColumn({ type: 'bigint', name: 'TrainingAssessmentFactorDataStateHistoryID' })
  trainingAssessmentFactorDataStateHistoryID: number;

  @Column({ type: 'bigint', name: 'TrainingAssessmentFactorDataRef' })
  trainingAssessmentFactorDataRef: number;

  @Column({ type: 'bigint', name: 'AuditorRef', nullable: true })
  auditorRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ChangeDate' })
  changeDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}