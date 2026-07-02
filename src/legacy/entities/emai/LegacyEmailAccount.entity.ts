import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmailAccount' })
export class LegacyEmailAccount {
  @PrimaryColumn({ type: 'bigint', name: 'EmailAccountID' })
  emailAccountID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'UserName' })
  userName: string;

  @Column({ type: 'character varying', name: 'Password' })
  password: string;

  @Column({ type: 'character varying', name: 'IncomingMailHost', nullable: true })
  incomingMailHost: string | null;

  @Column({ type: 'character varying', name: 'OutgoingMailHost', nullable: true })
  outgoingMailHost: string | null;

  @Column({ type: 'integer', name: 'IncomingMailPort', nullable: true })
  incomingMailPort: number | null;

  @Column({ type: 'integer', name: 'OutgoingMailPort', nullable: true })
  outgoingMailPort: number | null;

  @Column({ type: 'integer', name: 'IncomingMailProtocol' })
  incomingMailProtocol: number;

  @Column({ type: 'integer', name: 'OutgoingMailProtocol' })
  outgoingMailProtocol: number;

  @Column({ type: 'integer', name: 'IncomingMailEncryption' })
  incomingMailEncryption: number;

  @Column({ type: 'integer', name: 'OutgoingMailEncryption' })
  outgoingMailEncryption: number;

  @Column({ type: 'integer', name: 'IncomingMailSecurity' })
  incomingMailSecurity: number;

  @Column({ type: 'integer', name: 'OutgoingMailSecurity' })
  outgoingMailSecurity: number;

  @Column({ type: 'integer', name: 'Usage' })
  usage: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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