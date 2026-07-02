import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessDefinitionVersion' })
export class LegacyProcessDefinitionVersion {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessDefinitionVersionID' })
  processDefinitionVersionID: number;

  @Column({ type: 'bigint', name: 'ProcessDefinitionRef' })
  processDefinitionRef: number;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'character varying', name: 'IdentityName', nullable: true })
  identityName: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Definition' })
  definition: string;

  @Column({ type: 'bigint', name: 'ParentVersionRef', nullable: true })
  parentVersionRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationTime' })
  creationTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'ModificationTime' })
  modificationTime: Date;

  @Column({ type: 'character varying', name: 'UpdateMap', nullable: true })
  updateMap: string | null;

  @Column({ type: 'character varying', name: 'MetaData' })
  metaData: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'DefinitionType' })
  definitionType: number;

  @Column({ type: 'integer', name: 'VersionNumber', nullable: true })
  versionNumber: number | null;

  @Column({ type: 'timestamp without time zone', name: 'PublicationTime', nullable: true })
  publicationTime: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsOfflineMode', default: false })
  isOfflineMode: boolean;

}