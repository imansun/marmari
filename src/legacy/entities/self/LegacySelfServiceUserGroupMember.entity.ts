import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceUserGroupMember' })
export class LegacySelfServiceUserGroupMember {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceUserGroupMemberID' })
  selfServiceUserGroupMemberID: number;

  @Column({ type: 'bigint', name: 'SelfServiceUserGroupRef' })
  selfServiceUserGroupRef: number;

  @Column({ type: 'bigint', name: 'SelfServiceUserRef' })
  selfServiceUserRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}