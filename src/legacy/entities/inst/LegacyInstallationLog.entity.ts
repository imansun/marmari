import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InstallationLog' })
export class LegacyInstallationLog {
  @PrimaryColumn({ type: 'bigint', name: 'ID' })
  iD: number;

  @Column({ type: 'bigint', name: 'InstallationID' })
  installationID: number;

  @Column({ type: 'character varying', name: 'TierName', nullable: true })
  tierName: string | null;

  @Column({ type: 'integer', name: 'Sevirity' })
  sevirity: number;

  @Column({ type: 'character varying', name: 'Message' })
  message: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

}