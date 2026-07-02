import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CourseRequestParticipant' })
export class LegacyCourseRequestParticipant {
  @PrimaryColumn({ type: 'bigint', name: 'CourseRequestParticipantID' })
  courseRequestParticipantID: number;

  @Column({ type: 'bigint', name: 'CourseRequestRef' })
  courseRequestRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'OriginNeedCode' })
  originNeedCode: number;

  @Column({ type: 'integer', name: 'ReqDecisionSourceCode', nullable: true })
  reqDecisionSourceCode: number | null;

  @Column({ type: 'integer', name: 'PriorityCode', nullable: true })
  priorityCode: number | null;

  @Column({ type: 'integer', name: 'StateCode' })
  stateCode: number;

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