import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GeneralPackageInfo' })
export class LegacyGeneralPackageInfo {
  @PrimaryColumn({ type: 'bigint', name: 'GeneralPackageInfoID' })
  generalPackageInfoID: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'VersionNumber', nullable: true })
  versionNumber: number | null;

  @Column({ type: 'character varying', name: 'Icon', nullable: true })
  icon: string | null;

  @Column({ type: 'character varying', name: 'Developer' })
  developer: string;

  @Column({ type: 'integer', name: 'PackageType' })
  packageType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

}