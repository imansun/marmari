import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceReferenceRegionalAreaItem' })
export class LegacyPriceReferenceRegionalAreaItem {
  @PrimaryColumn({ type: 'bigint', name: 'PriceReferenceRegionalAreaItemID' })
  priceReferenceRegionalAreaItemID: number;

  @Column({ type: 'bigint', name: 'PriceReferenceRegionalAreaRef' })
  priceReferenceRegionalAreaRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef' })
  regionalDivisionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}