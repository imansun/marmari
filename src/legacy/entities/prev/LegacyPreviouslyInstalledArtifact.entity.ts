import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PreviouslyInstalledArtifact' })
export class LegacyPreviouslyInstalledArtifact {
  @PrimaryColumn({ type: 'bigint', name: 'ID' })
  iD: number;

  @PrimaryColumn({ type: 'character varying', name: 'Name' })
  name: string;

  @PrimaryColumn({ type: 'integer', name: 'Version' })
  version: number;

  @PrimaryColumn({ type: 'character varying', name: 'Crc' })
  crc: string;

  @PrimaryColumn({ type: 'bigint', name: 'InstallationID' })
  installationID: number;

}