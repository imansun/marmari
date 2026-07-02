import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'User' })
export class LegacyUser {
  @PrimaryColumn({ type: 'bigint', name: 'UserID' })
  userID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'boolean', name: 'IsAdministrator', nullable: true })
  isAdministrator: boolean | null;

  @Column({ type: 'boolean', name: 'IsLocked', default: false })
  isLocked: boolean;

  @Column({ type: 'timestamp without time zone', name: 'LockExpiration', nullable: true })
  lockExpiration: Date | null;

  @Column({ type: 'character varying', name: 'Password', nullable: true })
  password: string | null;

  @Column({ type: 'timestamp without time zone', name: 'LastPasswordUpdate' })
  lastPasswordUpdate: Date;

  @Column({ type: 'integer', name: 'PasswordExpiration', default: 0 })
  passwordExpiration: number;

  @Column({ type: 'character varying', name: 'DomainUserName', nullable: true })
  domainUserName: string | null;

  @Column({ type: 'character varying', name: 'ValidWorkstations', nullable: true })
  validWorkstations: string | null;

  @Column({ type: 'character varying', name: 'Context', nullable: true })
  context: string | null;

  @Column({ type: 'character varying', name: 'ContextData', nullable: true })
  contextData: string | null;

  @Column({ type: 'boolean', name: 'RemoteServiceEnabled', default: false })
  remoteServiceEnabled: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator', default: 1 })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier', default: 1 })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

}