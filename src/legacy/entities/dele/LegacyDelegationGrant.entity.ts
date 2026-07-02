import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DelegationGrant' })
export class LegacyDelegationGrant {
  @PrimaryColumn({ type: 'bigint', name: 'DelegationGrantID' })
  delegationGrantID: number;

  @Column({ type: 'integer', name: 'Category' })
  category: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}