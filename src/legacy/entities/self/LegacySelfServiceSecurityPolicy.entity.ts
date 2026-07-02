import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceSecurityPolicy' })
export class LegacySelfServiceSecurityPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceSecurityPolicyID' })
  selfServiceSecurityPolicyID: number;

  @Column({ type: 'bigint', name: 'SelfServiceUserRef', nullable: true })
  selfServiceUserRef: number | null;

  @Column({ type: 'bigint', name: 'SelfServiceUserGroupRef', nullable: true })
  selfServiceUserGroupRef: number | null;

  @Column({ type: 'integer', name: 'AccessType' })
  accessType: number;

  @Column({ type: 'character varying', name: 'SecurityKey' })
  securityKey: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}