import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TrainingFactorDataStateHistory' })
export class LegacyTrainingFactorDataStateHistory {
  @PrimaryColumn({ type: 'bigint', name: 'TrainingFactorDataStateHistoryID' })
  trainingFactorDataStateHistoryID: number;

  @Column({ type: 'bigint', name: 'TrainingFactorDataRef' })
  trainingFactorDataRef: number;

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