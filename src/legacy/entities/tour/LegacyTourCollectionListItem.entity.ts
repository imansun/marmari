import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourCollectionListItem' })
export class LegacyTourCollectionListItem {
  @PrimaryColumn({ type: 'bigint', name: 'TourCollectionListItemID' })
  tourCollectionListItemID: number;

  @Column({ type: 'bigint', name: 'TourRef' })
  tourRef: number;

  @Column({ type: 'bigint', name: 'CollectionListRef' })
  collectionListRef: number;

  @Column({ type: 'boolean', name: 'SentToHandheld', default: false })
  sentToHandheld: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}