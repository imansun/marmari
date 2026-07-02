import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TrainingReportViewSetting' })
export class LegacyTrainingReportViewSetting {
  @PrimaryColumn({ type: 'bigint', name: 'TrainingReportViewSettingID' })
  trainingReportViewSettingID: number;

  @Column({ type: 'integer', name: 'ReportType' })
  reportType: number;

  @Column({ type: 'boolean', name: 'HasCourseTitle' })
  hasCourseTitle: boolean;

  @Column({ type: 'boolean', name: 'HasCourseCode' })
  hasCourseCode: boolean;

  @Column({ type: 'boolean', name: 'HasCourseSubject' })
  hasCourseSubject: boolean;

  @Column({ type: 'boolean', name: 'HasTrainers' })
  hasTrainers: boolean;

  @Column({ type: 'boolean', name: 'HasInstitute' })
  hasInstitute: boolean;

  @Column({ type: 'boolean', name: 'HasParticipantsCount' })
  hasParticipantsCount: boolean;

  @Column({ type: 'boolean', name: 'HasParticipantSessionCount' })
  hasParticipantSessionCount: boolean;

  @Column({ type: 'boolean', name: 'HasLearningEffectivenessPercent' })
  hasLearningEffectivenessPercent: boolean;

  @Column({ type: 'boolean', name: 'HasCourseEffectivenessPercentForStudent' })
  hasCourseEffectivenessPercentForStudent: boolean;

  @Column({ type: 'boolean', name: 'HasCourseEffectivenessEvaluation' })
  hasCourseEffectivenessEvaluation: boolean;

  @Column({ type: 'boolean', name: 'HasCourseEffectivenessResult' })
  hasCourseEffectivenessResult: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}