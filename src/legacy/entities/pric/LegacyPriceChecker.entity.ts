import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceChecker' })
export class LegacyPriceChecker {
  @PrimaryColumn({ type: 'bigint', name: 'PriceCheckerID' })
  priceCheckerID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'SelectedFields' })
  selectedFields: number;

  @Column({ type: 'integer', name: 'DisplayTimeoutSecond' })
  displayTimeoutSecond: number;

  @Column({ type: 'uuid', name: 'UniqueID' })
  uniqueID: string;

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

  @Column({ type: 'integer', name: 'SearchMethod', default: 1 })
  searchMethod: number;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'integer', name: 'VisibleSearchMethods', default: 1 })
  visibleSearchMethods: number;

  @Column({ type: 'integer', name: 'Currency', default: 1 })
  currency: number;

}