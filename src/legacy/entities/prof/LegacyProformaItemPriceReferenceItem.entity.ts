import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProformaItemPriceReferenceItem' })
export class LegacyProformaItemPriceReferenceItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProformaItemPriceReferenceItemID' })
  proformaItemPriceReferenceItemID: number;

  @Column({ type: 'bigint', name: 'ProformaItemRef' })
  proformaItemRef: number;

  @Column({ type: 'bigint', name: 'PriceReferenceItemRef' })
  priceReferenceItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}