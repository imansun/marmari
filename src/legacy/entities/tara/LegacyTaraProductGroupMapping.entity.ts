import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaraProductGroupMapping' })
export class LegacyTaraProductGroupMapping {
  @PrimaryColumn({ type: 'bigint', name: 'TaraProductGroupMappingID' })
  taraProductGroupMappingID: number;

  @Column({ type: 'bigint', name: 'TaraProductGroupRef' })
  taraProductGroupRef: number;

  @Column({ type: 'bigint', name: 'EntityGroupRef', nullable: true })
  entityGroupRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}