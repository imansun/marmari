import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceUserPermission' })
export class LegacySelfServiceUserPermission {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceUserPermissionID' })
  selfServiceUserPermissionID: number;

  @Column({ type: 'bigint', name: 'SelfServiceUserRef' })
  selfServiceUserRef: number;

  @Column({ type: 'character varying', name: 'SecurityKey' })
  securityKey: string;

  @Column({ type: 'boolean', name: 'PermissionType' })
  permissionType: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}