import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FavoriteProductItem' })
export class LegacyFavoriteProductItem {
  @PrimaryColumn({ type: 'bigint', name: 'FavoriteProductItemID' })
  favoriteProductItemID: number;

  @Column({ type: 'bigint', name: 'FavoriteProductCollectionRef' })
  favoriteProductCollectionRef: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Image' })
  image: Buffer;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'BorderColor' })
  borderColor: string;

}