import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StateHistory' })
export class LegacyStateHistory {
  @PrimaryColumn({ type: 'bigint', name: 'StateHistoryID' })
  stateHistoryID: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'RecordID' })
  recordID: number;

  @Column({ type: 'integer', name: 'SourceState' })
  sourceState: number;

  @Column({ type: 'integer', name: 'TargetState' })
  targetState: number;

  @Column({ type: 'timestamp without time zone', name: 'ChangeDate' })
  changeDate: Date;

  @Column({ type: 'bigint', name: 'ChangingUserID', nullable: true })
  changingUserID: number | null;

  @Column({ type: 'integer', name: 'CustomOperationCode', nullable: true })
  customOperationCode: number | null;

  @Column({ type: 'character varying', name: 'CustomOperationTitle', nullable: true })
  customOperationTitle: string | null;

  @Column({ type: 'character varying', name: 'Notes', nullable: true })
  notes: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'TaskOwnerUserID', nullable: true })
  taskOwnerUserID: number | null;

}