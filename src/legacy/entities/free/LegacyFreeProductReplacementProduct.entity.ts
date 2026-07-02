import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FreeProductReplacementProduct' })
export class LegacyFreeProductReplacementProduct {
  @PrimaryColumn({ type: 'bigint', name: 'FreeProductReplacementProductID' })
  freeProductReplacementProductID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'bigint', name: 'FreeProductDetailedProductsRef', nullable: true })
  freeProductDetailedProductsRef: number | null;

  @Column({ type: 'bigint', name: 'ReplaceProductGroupRef', nullable: true })
  replaceProductGroupRef: number | null;

  @Column({ type: 'bigint', name: 'ReplaceProductRef', nullable: true })
  replaceProductRef: number | null;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}