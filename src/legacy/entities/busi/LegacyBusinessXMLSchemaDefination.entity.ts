import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessXMLSchemaDefination' })
export class LegacyBusinessXMLSchemaDefination {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessXMLSchemaDefinationID' })
  businessXMLSchemaDefinationID: number;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'timestamp without time zone', name: 'LastUpdate' })
  lastUpdate: Date;

  @Column({ type: 'character varying', name: 'Data' })
  data: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'VersionNumber' })
  versionNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'DefinitionType' })
  definitionType: number;

}