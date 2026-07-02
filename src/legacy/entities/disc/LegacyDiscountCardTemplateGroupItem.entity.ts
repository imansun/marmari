import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DiscountCardTemplateGroupItem' })
export class LegacyDiscountCardTemplateGroupItem {
  @PrimaryColumn({ type: 'bigint', name: 'DiscountCardTemplateGroupItemID' })
  discountCardTemplateGroupItemID: number;

  @Column({ type: 'bigint', name: 'DiscountCardTemplateGroupRef' })
  discountCardTemplateGroupRef: number;

  @Column({ type: 'bigint', name: 'DiscountCardTemplateRef' })
  discountCardTemplateRef: number;

  @Column({ type: 'integer', name: 'NumberOfCards' })
  numberOfCards: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}