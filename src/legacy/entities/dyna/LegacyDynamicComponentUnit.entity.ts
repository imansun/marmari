import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DynamicComponentUnit' })
export class LegacyDynamicComponentUnit {
  @PrimaryColumn({ type: 'bigint', name: 'DynamicComponentUnitID' })
  dynamicComponentUnitID: number;

  @Column({ type: 'character varying', name: 'MasterEntityName' })
  masterEntityName: string;

  @Column({ type: 'character varying', name: 'MasterEntityTitle' })
  masterEntityTitle: string;

  @Column({ type: 'bigint', name: 'ComponentRef' })
  componentRef: number;

  @Column({ type: 'character varying', name: 'Metadata', nullable: true })
  metadata: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'uuid', name: 'Guid' })
  guid: string;

  @Column({ type: 'character varying', name: 'DllChecksum', nullable: true })
  dllChecksum: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'PublishOnFanoos', nullable: true })
  publishOnFanoos: boolean | null;

}