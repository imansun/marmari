import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductListProduct' })
export class LegacyProductListProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ProductListProductID' })
  productListProductID: number;

  @Column({ type: 'bigint', name: 'ProductListRef' })
  productListRef: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}