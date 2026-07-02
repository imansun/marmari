import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityEvent' })
export class LegacyEntityEvent {
  @PrimaryColumn({ type: 'bigint', name: 'EntityEventID' })
  entityEventID: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'character varying', name: 'EventName' })
  eventName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}