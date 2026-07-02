import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DiscountCardTemplateProductProductGroup' })
export class LegacyDiscountCardTemplateProductProductGroup {
  @PrimaryColumn({ type: 'bigint', name: 'DiscountCardTemplateProductProductGroupID' })
  discountCardTemplateProductProductGroupID: number;

  @Column({ type: 'bigint', name: 'DiscountCardTemplateRef' })
  discountCardTemplateRef: number;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'ProductGroupRef', nullable: true })
  productGroupRef: number | null;

  @Column({ type: 'numeric', name: 'MinimumPurchaseAmount' })
  minimumPurchaseAmount: number;

  @Column({ type: 'numeric', name: 'MinimumPurchaseItemsCount' })
  minimumPurchaseItemsCount: number;

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