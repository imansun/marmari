import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ResourceToolRelatedModule' })
export class LegacyResourceToolRelatedModule {
  @PrimaryColumn({ type: 'bigint', name: 'ResourceToolRelatedModuleID' })
  resourceToolRelatedModuleID: number;

  @Column({ type: 'bigint', name: 'ResourceToolRef' })
  resourceToolRef: number;

  @Column({ type: 'character varying', name: 'ModuleKey' })
  moduleKey: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}