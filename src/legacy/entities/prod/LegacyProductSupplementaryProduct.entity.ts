import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductSupplementaryProduct' })
export class LegacyProductSupplementaryProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ProductSupplementaryProductID' })
  productSupplementaryProductID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'SupplementaryProductRef', nullable: true })
  supplementaryProductRef: number | null;

  @Column({ type: 'bigint', name: 'SupplementaryProductGroupRef', nullable: true })
  supplementaryProductGroupRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'ForEach' })
  forEach: number;

  @Column({ type: 'bigint', name: 'ForEachUnitRef' })
  forEachUnitRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}