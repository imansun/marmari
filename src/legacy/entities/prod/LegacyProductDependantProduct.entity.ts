import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductDependantProduct' })
export class LegacyProductDependantProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ProductDependantProductID' })
  productDependantProductID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'DependantProductRef' })
  dependantProductRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}