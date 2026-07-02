import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportationManagementPortalUserPermission' })
export class LegacyTransportationManagementPortalUserPermission {
  @PrimaryColumn({ type: 'bigint', name: 'TransportationManagementPortalUserPermissionID' })
  transportationManagementPortalUserPermissionID: number;

  @Column({ type: 'bigint', name: 'TransportationManagementPortalUserRef' })
  transportationManagementPortalUserRef: number;

  @Column({ type: 'character varying', name: 'SecurityKey' })
  securityKey: string;

  @Column({ type: 'boolean', name: 'PermissionType' })
  permissionType: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}