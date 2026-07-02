import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalControllerAccess_BACKUP' })
export class LegacyRfidLocalControllerAccessBACKUP {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalControllerAccessID' })
  rfidLocalControllerAccessID: number;

  @PrimaryColumn({ type: 'character varying', name: 'CardNumber' })
  cardNumber: string;

  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalControllerRef' })
  rfidLocalControllerRef: number;

  @PrimaryColumn({ type: 'integer', name: 'RfidLocalGateCode' })
  rfidLocalGateCode: number;

  @PrimaryColumn({ type: 'character', name: 'Password' })
  password: string;

  @PrimaryColumn({ type: 'integer', name: 'StatusCode' })
  statusCode: number;

  @PrimaryColumn({ type: 'integer', name: 'OldStatusCode' })
  oldStatusCode: number;

  @PrimaryColumn({ type: 'boolean', name: 'Sent' })
  sent: boolean;

  @PrimaryColumn({ type: 'character varying', name: 'Error' })
  error: string | null;

  @PrimaryColumn({ type: 'boolean', name: 'SentToDevice' })
  sentToDevice: boolean | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}