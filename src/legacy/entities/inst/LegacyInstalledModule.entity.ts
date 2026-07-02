import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InstalledModule' })
export class LegacyInstalledModule {
  @PrimaryColumn({ type: 'bigint', name: 'ID' })
  iD: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Version' })
  version: number;

  @Column({ type: 'bigint', name: 'InstallationID' })
  installationID: number;

  @Column({ type: 'timestamp without time zone', name: 'InsertDate' })
  insertDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

}