import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalControllerAccess' })
export class LegacyRfidLocalControllerAccess {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalControllerAccessID' })
  rfidLocalControllerAccessID: number;

  @Column({ type: 'character varying', name: 'CardNumber' })
  cardNumber: string;

  @Column({ type: 'bigint', name: 'RfidLocalControllerRef' })
  rfidLocalControllerRef: number;

  @Column({ type: 'integer', name: 'RfidLocalGateCode' })
  rfidLocalGateCode: number;

  @Column({ type: 'character', name: 'Password' })
  password: string;

  @Column({ type: 'integer', name: 'StatusCode' })
  statusCode: number;

  @Column({ type: 'integer', name: 'OldStatusCode' })
  oldStatusCode: number;

  @Column({ type: 'boolean', name: 'Sent' })
  sent: boolean;

  @Column({ type: 'character varying', name: 'Error', nullable: true })
  error: string | null;

  @Column({ type: 'boolean', name: 'SentToDevice', nullable: true })
  sentToDevice: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}