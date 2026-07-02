import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TrainingReportViewSettingFactor' })
export class LegacyTrainingReportViewSettingFactor {
  @PrimaryColumn({ type: 'bigint', name: 'TrainingReportViewSettingFactorID' })
  trainingReportViewSettingFactorID: number;

  @Column({ type: 'bigint', name: 'TrainingReportViewSettingRef' })
  trainingReportViewSettingRef: number;

  @Column({ type: 'bigint', name: 'TrainingAssessmentFactorRef' })
  trainingAssessmentFactorRef: number;

  @Column({ type: 'character varying', name: 'FactorTitleInReport', nullable: true })
  factorTitleInReport: string | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}