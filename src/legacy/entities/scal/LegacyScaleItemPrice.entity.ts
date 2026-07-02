import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ScaleItemPrice' })
export class LegacyScaleItemPrice {
  @PrimaryColumn({ type: 'bigint', name: 'ScaleItemPriceID' })
  scaleItemPriceID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'integer', name: 'Code' })
  code: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'ScaleGroupRef' })
  scaleGroupRef: number;

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

  @Column({ type: 'character varying', name: 'Key', nullable: true })
  key: string | null;

  @Column({ type: 'character varying', name: 'PreviousKey', nullable: true })
  previousKey: string | null;

  @Column({ type: 'bigint', name: 'EntityGroupingRef' })
  entityGroupingRef: number;

}