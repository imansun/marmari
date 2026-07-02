import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AuthorityDelegation' })
export class LegacyAuthorityDelegation {
  @PrimaryColumn({ type: 'bigint', name: 'AuthorityDelegationID' })
  authorityDelegationID: number;

  @Column({ type: 'bigint', name: 'DelegatorRef' })
  delegatorRef: number;

  @Column({ type: 'bigint', name: 'DelegateeRef' })
  delegateeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'CorrespondenceFromDate', nullable: true })
  correspondenceFromDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CorrespondenceToDate', nullable: true })
  correspondenceToDate: Date | null;

  @Column({ type: 'integer', name: 'VisibilityPolicy' })
  visibilityPolicy: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}