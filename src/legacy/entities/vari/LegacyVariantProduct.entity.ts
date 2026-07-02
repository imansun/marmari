import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VariantProduct' })
export class LegacyVariantProduct {
  @PrimaryColumn({ type: 'bigint', name: 'VariantProductID' })
  variantProductID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'VariantProductRef', nullable: true })
  variantProductRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}