import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalGateSecurity_BACKUP' })
export class LegacyRfidLocalGateSecurityBACKUP {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalGateSecurityID' })
  rfidLocalGateSecurityID: number;

  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalGateRef' })
  rfidLocalGateRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'UserRef' })
  userRef: number;

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