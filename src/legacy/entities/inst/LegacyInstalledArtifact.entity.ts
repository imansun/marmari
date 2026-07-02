import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InstalledArtifact' })
export class LegacyInstalledArtifact {
  @PrimaryColumn({ type: 'bigint', name: 'ID' })
  iD: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'Version' })
  version: number;

  @Column({ type: 'character varying', name: 'Crc' })
  crc: string;

  @Column({ type: 'timestamp without time zone', name: 'InsertDate' })
  insertDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'InstallationID' })
  installationID: number;

}