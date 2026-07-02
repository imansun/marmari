import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WebSession' })
export class LegacyWebSession {
  @PrimaryColumn({ type: 'bigint', name: 'WebSessionID' })
  webSessionID: number;

  @Column({ type: 'character varying', name: 'ApplicationInstanceID' })
  applicationInstanceID: string;

  @Column({ type: 'character varying', name: 'SessionID' })
  sessionID: string;

  @Column({ type: 'timestamp without time zone', name: 'LastAccessTime' })
  lastAccessTime: Date;

}