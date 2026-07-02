import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessData' })
export class LegacyBusinessData {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessDataID' })
  businessDataID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'VersionNumber' })
  versionNumber: number;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'integer', name: 'DefinitionType' })
  definitionType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Data' })
  data: string;

}