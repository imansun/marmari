import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MissionDocumentFactor' })
export class LegacyMissionDocumentFactor {
  @PrimaryColumn({ type: 'bigint', name: 'MissionDocumentFactorID' })
  missionDocumentFactorID: number;

  @Column({ type: 'bigint', name: 'MissionDocumentRef' })
  missionDocumentRef: number;

  @Column({ type: 'bigint', name: 'MissionFactorPropertyRef' })
  missionFactorPropertyRef: number;

  @Column({ type: 'numeric', name: 'CalcValue' })
  calcValue: number;

  @Column({ type: 'numeric', name: 'EditedValue', nullable: true })
  editedValue: number | null;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

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