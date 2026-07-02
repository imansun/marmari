import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DynamicReport' })
export class LegacyDynamicReport {
  @PrimaryColumn({ type: 'bigint', name: 'DynamicReportID' })
  dynamicReportID: number;

  @Column({ type: 'character varying', name: 'Category' })
  category: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Data' })
  data: string;

  @Column({ type: 'bigint', name: 'CreatorUserRef' })
  creatorUserRef: number;

  @Column({ type: 'integer', name: 'Level' })
  level: number;

  @Column({ type: 'integer', name: 'SystemReportMode' })
  systemReportMode: number;

  @Column({ type: 'character varying', name: 'UniqueName' })
  uniqueName: string;

  @Column({ type: 'character varying', name: 'ViewSecurityKey', nullable: true })
  viewSecurityKey: string | null;

  @Column({ type: 'uuid', name: 'Guid' })
  guid: string;

  @Column({ type: 'integer', name: 'VersionNumber', default: 1 })
  versionNumber: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsPublic' })
  isPublic: boolean;

}