import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DynamicComponentDeployment14031213' })
export class LegacyDynamicComponentDeployment14031213 {
  @PrimaryColumn({ type: 'bigint', name: 'DynamicComponentDeploymentID' })
  dynamicComponentDeploymentID: number;

  @PrimaryColumn({ type: 'bigint', name: 'ComponentRef' })
  componentRef: number;

  @PrimaryColumn({ type: 'integer', name: 'ComponentVersion' })
  componentVersion: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'DeployerServerName' })
  deployerServerName: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'ServerName' })
  serverName: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Time' })
  time: Date;

  @PrimaryColumn({ type: 'integer', name: 'Status' })
  status: number;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer | null;

}