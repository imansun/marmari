import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DynamicComponentDeployment' })
export class LegacyDynamicComponentDeployment {
  @PrimaryColumn({ type: 'bigint', name: 'DynamicComponentDeploymentID' })
  dynamicComponentDeploymentID: number;

  @Column({ type: 'bigint', name: 'ComponentRef' })
  componentRef: number;

  @Column({ type: 'integer', name: 'ComponentVersion', nullable: true })
  componentVersion: number | null;

  @Column({ type: 'character varying', name: 'DeployerServerName', nullable: true })
  deployerServerName: string | null;

  @Column({ type: 'character varying', name: 'ServerName', nullable: true })
  serverName: string | null;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Time' })
  time: Date;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}