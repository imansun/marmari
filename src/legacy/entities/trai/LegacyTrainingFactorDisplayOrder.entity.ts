import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TrainingFactorDisplayOrder' })
export class LegacyTrainingFactorDisplayOrder {
  @PrimaryColumn({ type: 'bigint', name: 'TrainingFactorDisplayOrderID' })
  trainingFactorDisplayOrderID: number;

  @Column({ type: 'bigint', name: 'TrainingFactorRef' })
  trainingFactorRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'integer', name: 'DisplayOrder' })
  displayOrder: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}