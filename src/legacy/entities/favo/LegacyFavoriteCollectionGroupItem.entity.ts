import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FavoriteCollectionGroupItem' })
export class LegacyFavoriteCollectionGroupItem {
  @PrimaryColumn({ type: 'bigint', name: 'FavoriteCollectionGroupItemID' })
  favoriteCollectionGroupItemID: number;

  @Column({ type: 'bigint', name: 'FavoriteCollectionGroupRef' })
  favoriteCollectionGroupRef: number;

  @Column({ type: 'bigint', name: 'FavoriteProductCollectionRef' })
  favoriteProductCollectionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}