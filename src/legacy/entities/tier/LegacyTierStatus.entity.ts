import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TierStatus' })
export class LegacyTierStatus {
  @PrimaryColumn({ type: 'bigint', name: 'ID' })
  iD: number;

  @Column({ type: 'bigint', name: 'InstallationID' })
  installationID: number;

  @Column({ type: 'character varying', name: 'TierName' })
  tierName: string;

  @Column({ type: 'character varying', name: 'ServerName' })
  serverName: string;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'Reason', nullable: true })
  reason: string | null;

  @Column({ type: 'timestamp without time zone', name: 'LastStatusReportDate' })
  lastStatusReportDate: Date;

}