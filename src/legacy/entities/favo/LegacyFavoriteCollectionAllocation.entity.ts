import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FavoriteCollectionAllocation' })
export class LegacyFavoriteCollectionAllocation {
  @PrimaryColumn({ type: 'bigint', name: 'FavoriteCollectionAllocationID' })
  favoriteCollectionAllocationID: number;

  @Column({ type: 'bigint', name: 'FavoriteCollectionGroupRef', nullable: true })
  favoriteCollectionGroupRef: number | null;

  @Column({ type: 'bigint', name: 'FavoriteProductCollectionRef', nullable: true })
  favoriteProductCollectionRef: number | null;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'CashRegisterRef' })
  cashRegisterRef: number;

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

}