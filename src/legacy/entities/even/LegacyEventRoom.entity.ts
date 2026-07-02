import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EventRoom' })
export class LegacyEventRoom {
  @PrimaryColumn({ type: 'bigint', name: 'EventRoomID' })
  eventRoomID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'integer', name: 'Capacity', nullable: true })
  capacity: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Location', nullable: true })
  location: string | null;

  @Column({ type: 'bigint', name: 'CorrespondentInCharge', nullable: true })
  correspondentInCharge: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}