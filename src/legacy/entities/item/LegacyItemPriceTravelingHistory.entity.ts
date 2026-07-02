import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ItemPriceTravelingHistory' })
export class LegacyItemPriceTravelingHistory {
  @PrimaryColumn({ type: 'bigint', name: 'ItemPriceTravelingHistoryID' })
  itemPriceTravelingHistoryID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'bigint', name: 'ItemPriceRef' })
  itemPriceRef: number;

  @Column({ type: 'bigint', name: 'ReturnItemPriceRef' })
  returnItemPriceRef: number;

  @Column({ type: 'bigint', name: 'ReturnInventoryVoucherItemRef' })
  returnInventoryVoucherItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'OldSortingDateInCardex' })
  oldSortingDateInCardex: Date;

  @Column({ type: 'timestamp without time zone', name: 'NewSortingDateInCardex' })
  newSortingDateInCardex: Date;

  @Column({ type: 'integer', name: 'OldSortingNumerator' })
  oldSortingNumerator: number;

  @Column({ type: 'integer', name: 'NewSortingNumerator' })
  newSortingNumerator: number;

  @Column({ type: 'integer', name: 'OldSortingDenominator' })
  oldSortingDenominator: number;

  @Column({ type: 'integer', name: 'NewSortingDenominator' })
  newSortingDenominator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}