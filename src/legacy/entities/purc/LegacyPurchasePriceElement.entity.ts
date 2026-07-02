import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchasePriceElement' })
export class LegacyPurchasePriceElement {
  @PrimaryColumn({ type: 'bigint', name: 'PurchasePriceElementID' })
  purchasePriceElementID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En' })
  titleEn: string;

  @Column({ type: 'integer', name: 'ElementType' })
  elementType: number;

  @Column({ type: 'boolean', name: 'IsAffectingCost', default: false })
  isAffectingCost: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}