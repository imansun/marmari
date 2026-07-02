import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EventAttendee' })
export class LegacyEventAttendee {
  @PrimaryColumn({ type: 'bigint', name: 'EventAttendeeID' })
  eventAttendeeID: number;

  @Column({ type: 'bigint', name: 'EventInstanceMetaDataRef' })
  eventInstanceMetaDataRef: number;

  @Column({ type: 'bigint', name: 'CorrespondentRef' })
  correspondentRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'Response' })
  response: number;

  @Column({ type: 'timestamp without time zone', name: 'LastStateChange', nullable: true })
  lastStateChange: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}