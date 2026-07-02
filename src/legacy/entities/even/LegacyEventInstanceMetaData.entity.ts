import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EventInstanceMetaData' })
export class LegacyEventInstanceMetaData {
  @PrimaryColumn({ type: 'bigint', name: 'EventInstanceMetaDataID' })
  eventInstanceMetaDataID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Reminder' })
  reminder: number;

  @Column({ type: 'character varying', name: 'Location', nullable: true })
  location: string | null;

  @Column({ type: 'bigint', name: 'RoomRef', nullable: true })
  roomRef: number | null;

  @Column({ type: 'bigint', name: 'Secretary', nullable: true })
  secretary: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}