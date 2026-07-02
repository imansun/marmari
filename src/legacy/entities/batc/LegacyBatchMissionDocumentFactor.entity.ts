import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchMissionDocumentFactor' })
export class LegacyBatchMissionDocumentFactor {
  @PrimaryColumn({ type: 'bigint', name: 'BatchMissionDocumentFactorID' })
  batchMissionDocumentFactorID: number;

  @Column({ type: 'bigint', name: 'BatchMissionDocumentRef' })
  batchMissionDocumentRef: number;

  @Column({ type: 'bigint', name: 'MissionFactorRef' })
  missionFactorRef: number;

  @Column({ type: 'integer', name: 'AssignmentMethodCode' })
  assignmentMethodCode: number;

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