import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceProductGroupImage' })
export class LegacySelfServiceProductGroupImage {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceProductGroupImageID' })
  selfServiceProductGroupImageID: number;

  @Column({ type: 'bigint', name: 'EntityGroupingRef' })
  entityGroupingRef: number;

  @Column({ type: 'bigint', name: 'ProductGroupRef' })
  productGroupRef: number;

  @Column({ type: 'bytea', name: 'ImageContent' })
  imageContent: Buffer;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}