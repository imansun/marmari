import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UserLogonAudit' })
export class LegacyUserLogonAudit {
  @PrimaryColumn({ type: 'bigint', name: 'UserLogonAuditID' })
  userLogonAuditID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'timestamp without time zone', name: 'LogonTime' })
  logonTime: Date;

  @Column({ type: 'character varying', name: 'LogonSource', nullable: true })
  logonSource: string | null;

  @Column({ type: 'character varying', name: 'LogonContext' })
  logonContext: string;

  @Column({ type: 'character varying', name: 'SessionID' })
  sessionID: string;

  @Column({ type: 'character varying', name: 'LogoutReason', nullable: true })
  logoutReason: string | null;

  @Column({ type: 'timestamp without time zone', name: 'LogoutTime', nullable: true })
  logoutTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'LastActivityTime' })
  lastActivityTime: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}