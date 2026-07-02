import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductBasketProduct' })
export class LegacyProductBasketProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ProductBasketProductID' })
  productBasketProductID: number;

  @Column({ type: 'bigint', name: 'ProductBasketRef' })
  productBasketRef: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}