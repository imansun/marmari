import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AuthorityDelegationGrant' })
export class LegacyAuthorityDelegationGrant {
  @PrimaryColumn({ type: 'bigint', name: 'AuthorityDelegationGrantID' })
  authorityDelegationGrantID: number;

  @Column({ type: 'bigint', name: 'AuthorityDelegationRef' })
  authorityDelegationRef: number;

  @Column({ type: 'bigint', name: 'DelegationGrantRef' })
  delegationGrantRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}