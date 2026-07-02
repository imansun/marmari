import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TrainingAssessmentFactorDisplayOrder' })
export class LegacyTrainingAssessmentFactorDisplayOrder {
  @PrimaryColumn({ type: 'bigint', name: 'TrainingAssessmentFactorDisplayOrderID' })
  trainingAssessmentFactorDisplayOrderID: number;

  @Column({ type: 'bigint', name: 'TrainingAssessmentFactorRef' })
  trainingAssessmentFactorRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'integer', name: 'DisplayOrder' })
  displayOrder: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}