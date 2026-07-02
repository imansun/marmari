import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DynamicComponentUnit14031213' })
export class LegacyDynamicComponentUnit14031213 {
  @PrimaryColumn({ type: 'bigint', name: 'DynamicComponentUnitID' })
  dynamicComponentUnitID: number;

  @PrimaryColumn({ type: 'character varying', name: 'MasterEntityName' })
  masterEntityName: string;

  @PrimaryColumn({ type: 'character varying', name: 'MasterEntityTitle' })
  masterEntityTitle: string;

  @PrimaryColumn({ type: 'bigint', name: 'ComponentRef' })
  componentRef: number;

  @PrimaryColumn({ type: 'character varying', name: 'Metadata' })
  metadata: string | null;

  @PrimaryColumn({ type: 'integer', name: 'State' })
  state: number;

  @PrimaryColumn({ type: 'uuid', name: 'Guid' })
  guid: string;

  @PrimaryColumn({ type: 'character varying', name: 'DllChecksum' })
  dllChecksum: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'boolean', name: 'PublishOnFanoos' })
  publishOnFanoos: boolean | null;

}