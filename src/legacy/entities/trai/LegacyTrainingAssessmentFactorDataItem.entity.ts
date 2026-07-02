import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TrainingAssessmentFactorDataItem' })
export class LegacyTrainingAssessmentFactorDataItem {
  @PrimaryColumn({ type: 'bigint', name: 'TrainingAssessmentFactorDataItemID' })
  trainingAssessmentFactorDataItemID: number;

  @Column({ type: 'bigint', name: 'TrainingAssessmentFactorDataRef' })
  trainingAssessmentFactorDataRef: number;

  @Column({ type: 'bigint', name: 'TrainingAssessmentFactorRef' })
  trainingAssessmentFactorRef: number;

  @Column({ type: 'bigint', name: 'TrainingAssessmentFactorPropertyRef' })
  trainingAssessmentFactorPropertyRef: number;

  @Column({ type: 'numeric', name: 'CalcValue', nullable: true })
  calcValue: number | null;

  @Column({ type: 'numeric', name: 'EditedValue', nullable: true })
  editedValue: number | null;

  @Column({ type: 'numeric', name: 'Value', nullable: true })
  value: number | null;

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