import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalGateSecurity' })
export class LegacyRfidLocalGateSecurity {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalGateSecurityID' })
  rfidLocalGateSecurityID: number;

  @Column({ type: 'bigint', name: 'RfidLocalGateRef' })
  rfidLocalGateRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

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