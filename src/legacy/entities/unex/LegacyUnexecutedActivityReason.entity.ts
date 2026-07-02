import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UnexecutedActivityReason' })
export class LegacyUnexecutedActivityReason {
  @PrimaryColumn({ type: 'bigint', name: 'UnexecutedActivityReasonID' })
  unexecutedActivityReasonID: number;

  @Column({ type: 'integer', name: 'ActivityType' })
  activityType: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'ReasonDescription' })
  reasonDescription: string;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'boolean', name: 'IsVisited', default: false })
  isVisited: boolean;

  @Column({ type: 'boolean', name: 'LocationMet' })
  locationMet: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}