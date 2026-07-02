import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProgressiveCollectionItem' })
export class LegacyProgressiveCollectionItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProgressiveCollectionItemID' })
  progressiveCollectionItemID: number;

  @Column({ type: 'bigint', name: 'ProgressiveCollectionRef' })
  progressiveCollectionRef: number;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'bigint', name: 'ItemRef', nullable: true })
  itemRef: number | null;

  @Column({ type: 'numeric', name: 'AllocatedAmount' })
  allocatedAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}