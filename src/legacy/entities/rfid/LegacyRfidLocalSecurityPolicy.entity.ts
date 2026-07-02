import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalSecurityPolicy' })
export class LegacyRfidLocalSecurityPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalSecurityPolicyID' })
  rfidLocalSecurityPolicyID: number;

  @Column({ type: 'bigint', name: 'RfidLocalLogicalResourceRef' })
  rfidLocalLogicalResourceRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'boolean', name: 'AccessType' })
  accessType: boolean;

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