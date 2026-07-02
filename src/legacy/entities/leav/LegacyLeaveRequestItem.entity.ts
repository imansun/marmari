import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LeaveRequestItem' })
export class LegacyLeaveRequestItem {
  @PrimaryColumn({ type: 'bigint', name: 'LeaveRequestItemID' })
  leaveRequestItemID: number;

  @Column({ type: 'bigint', name: 'LeaveRequestRef' })
  leaveRequestRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDateTime' })
  fromDateTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDateTime' })
  toDateTime: Date;

  @Column({ type: 'integer', name: 'Duration' })
  duration: number;

  @Column({ type: 'integer', name: 'DurationInDay', nullable: true })
  durationInDay: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}