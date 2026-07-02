import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DynamicComponentDependency' })
export class LegacyDynamicComponentDependency {
  @PrimaryColumn({ type: 'bigint', name: 'DynamicComponentDependencyID' })
  dynamicComponentDependencyID: number;

  @Column({ type: 'bigint', name: 'DynamicComponentRef' })
  dynamicComponentRef: number;

  @Column({ type: 'bigint', name: 'DependeeDynamicComponentRef' })
  dependeeDynamicComponentRef: number;

  @Column({ type: 'character varying', name: 'Metadata', nullable: true })
  metadata: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}