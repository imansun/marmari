import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchRelation' })
export class LegacyBatchRelation {
  @PrimaryColumn({ type: 'bigint', name: 'BatchRelationID' })
  batchRelationID: number;

  @Column({ type: 'bigint', name: 'MasterBatchRef' })
  masterBatchRef: number;

  @Column({ type: 'bigint', name: 'RelatedBatchRef' })
  relatedBatchRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}