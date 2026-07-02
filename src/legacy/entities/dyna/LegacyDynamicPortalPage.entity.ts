import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DynamicPortalPage' })
export class LegacyDynamicPortalPage {
  @PrimaryColumn({ type: 'bigint', name: 'DynamicPortalPageID' })
  dynamicPortalPageID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Metadata', nullable: true })
  metadata: string | null;

  @Column({ type: 'character varying', name: 'HeaderMetadata', nullable: true })
  headerMetadata: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'LayoutType' })
  layoutType: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'integer', name: 'VersionNumber' })
  versionNumber: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'DefinitionType' })
  definitionType: number;

}