import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CoursePlanParticipantSession' })
export class LegacyCoursePlanParticipantSession {
  @PrimaryColumn({ type: 'bigint', name: 'CoursePlanParticipantSessionID' })
  coursePlanParticipantSessionID: number;

  @Column({ type: 'bigint', name: 'CoursePlanParticipantRef' })
  coursePlanParticipantRef: number;

  @Column({ type: 'bigint', name: 'CoursePlanSessionRef' })
  coursePlanSessionRef: number;

  @Column({ type: 'boolean', name: 'IsPresent' })
  isPresent: boolean;

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