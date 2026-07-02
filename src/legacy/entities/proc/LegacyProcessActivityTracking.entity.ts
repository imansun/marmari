import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessActivityTracking' })
export class LegacyProcessActivityTracking {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessActivityTrackingID' })
  processActivityTrackingID: number;

  @Column({ type: 'uuid', name: 'UniqueId', nullable: true })
  uniqueId: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Start' })
  start: Date;

  @Column({ type: 'timestamp without time zone', name: 'End', nullable: true })
  end: Date | null;

  @Column({ type: 'character varying', name: 'ActivityId' })
  activityId: string;

  @Column({ type: 'character varying', name: 'ActivityName' })
  activityName: string;

  @Column({ type: 'bigint', name: 'ProcessInstanceTrackingRef' })
  processInstanceTrackingRef: number;

  @Column({ type: 'integer', name: 'AssignmentType', nullable: true })
  assignmentType: number | null;

  @Column({ type: 'bigint', name: 'StructureRef', nullable: true })
  structureRef: number | null;

  @Column({ type: 'bigint', name: 'PersonRef', nullable: true })
  personRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bigint', name: 'JobRef', nullable: true })
  jobRef: number | null;

  @Column({ type: 'bigint', name: 'PositionRef', nullable: true })
  positionRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Deadline', nullable: true })
  deadline: Date | null;

  @Column({ type: 'bigint', name: 'UserId', nullable: true })
  userId: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}