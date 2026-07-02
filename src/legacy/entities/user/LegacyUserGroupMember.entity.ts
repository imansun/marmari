import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UserGroupMember' })
export class LegacyUserGroupMember {
  @PrimaryColumn({ type: 'bigint', name: 'ID' })
  iD: number;

  @Column({ type: 'bigint', name: 'GroupingRef' })
  groupingRef: number;

  @Column({ type: 'bigint', name: 'GroupRef' })
  groupRef: number;

  @Column({ type: 'bigint', name: 'MemberID' })
  memberID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}