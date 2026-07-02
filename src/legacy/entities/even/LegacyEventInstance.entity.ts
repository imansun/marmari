import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EventInstance' })
export class LegacyEventInstance {
  @PrimaryColumn({ type: 'bigint', name: 'EventInstanceID' })
  eventInstanceID: number;

  @Column({ type: 'bigint', name: 'EventRef' })
  eventRef: number;

  @Column({ type: 'bigint', name: 'EventInstanceMetaDataRef' })
  eventInstanceMetaDataRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Start' })
  start: Date;

  @Column({ type: 'timestamp without time zone', name: 'End' })
  end: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}