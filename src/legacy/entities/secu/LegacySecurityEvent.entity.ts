import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SecurityEvent' })
export class LegacySecurityEvent {
  @PrimaryColumn({ type: 'bigint', name: 'ID' })
  iD: number;

  @Column({ type: 'uuid', name: 'UniqueID' })
  uniqueID: string;

  @Column({ type: 'timestamp without time zone', name: 'DateTime' })
  dateTime: Date;

  @Column({ type: 'bigint', name: 'UserID', nullable: true })
  userID: number | null;

  @Column({ type: 'uuid', name: 'ProcessID', nullable: true })
  processID: string | null;

  @Column({ type: 'character varying', name: 'UserName', nullable: true })
  userName: string | null;

  @Column({ type: 'character varying', name: 'WorkStation', nullable: true })
  workStation: string | null;

  @Column({ type: 'integer', name: 'Subject' })
  subject: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'DetailSummary', nullable: true })
  detailSummary: string | null;

  @Column({ type: 'character varying', name: 'Detail', nullable: true })
  detail: string | null;

  @Column({ type: 'character varying', name: 'Agent', nullable: true })
  agent: string | null;

  @Column({ type: 'character varying', name: 'HostName', nullable: true })
  hostName: string | null;

}