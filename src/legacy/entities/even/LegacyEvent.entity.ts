import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Event' })
export class LegacyEvent {
  @PrimaryColumn({ type: 'bigint', name: 'EventID' })
  eventID: number;

  @Column({ type: 'integer', name: 'Repeat' })
  repeat: number;

  @Column({ type: 'bigint', name: 'OrganizerCorrespondentRef' })
  organizerCorrespondentRef: number;

  @Column({ type: 'bigint', name: 'RequestedBy', nullable: true })
  requestedBy: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}