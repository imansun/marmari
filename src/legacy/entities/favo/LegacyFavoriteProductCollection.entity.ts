import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FavoriteProductCollection' })
export class LegacyFavoriteProductCollection {
  @PrimaryColumn({ type: 'bigint', name: 'FavoriteProductCollectionID' })
  favoriteProductCollectionID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Image' })
  image: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

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

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef', nullable: true })
  retailInteriorSectionRef: number | null;

  @Column({ type: 'character varying', name: 'BorderColor' })
  borderColor: string;

}