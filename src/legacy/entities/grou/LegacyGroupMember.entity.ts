import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GroupMember' })
export class LegacyGroupMember {
  @PrimaryColumn({ type: 'bigint', name: 'GroupMemberID' })
  groupMemberID: number;

  @Column({ type: 'bigint', name: 'GroupingRef' })
  groupingRef: number;

  @Column({ type: 'bigint', name: 'GroupRef' })
  groupRef: number;

  @Column({ type: 'bigint', name: 'MemberID' })
  memberID: number;

}