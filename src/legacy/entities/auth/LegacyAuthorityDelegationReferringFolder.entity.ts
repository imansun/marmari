import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AuthorityDelegationReferringFolder' })
export class LegacyAuthorityDelegationReferringFolder {
  @PrimaryColumn({ type: 'bigint', name: 'AuthorityDelegationReferringFolderID' })
  authorityDelegationReferringFolderID: number;

  @Column({ type: 'bigint', name: 'AuthorityDelegationRef' })
  authorityDelegationRef: number;

  @Column({ type: 'bigint', name: 'ReferringFolderRef' })
  referringFolderRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}