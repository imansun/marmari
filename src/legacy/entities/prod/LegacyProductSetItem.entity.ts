import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductSetItem' })
export class LegacyProductSetItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProductSetItemID' })
  productSetItemID: number;

  @Column({ type: 'bigint', name: 'ProductSetRef' })
  productSetRef: number;

  @Column({ type: 'bigint', name: 'ProductGroupRef', nullable: true })
  productGroupRef: number | null;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'QuantityInMajorUnit' })
  quantityInMajorUnit: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}