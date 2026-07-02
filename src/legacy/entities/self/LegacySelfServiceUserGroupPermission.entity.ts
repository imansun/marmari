import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceUserGroupPermission' })
export class LegacySelfServiceUserGroupPermission {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceUserGroupPermissionID' })
  selfServiceUserGroupPermissionID: number;

  @Column({ type: 'bigint', name: 'SelfServiceUserGroupRef' })
  selfServiceUserGroupRef: number;

  @Column({ type: 'character varying', name: 'SecurityKey' })
  securityKey: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}