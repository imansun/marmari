import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceUserGroup' })
export class LegacySelfServiceUserGroup {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceUserGroupID' })
  selfServiceUserGroupID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}