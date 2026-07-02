import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Topping' })
export class LegacyTopping {
  @PrimaryColumn({ type: 'bigint', name: 'ToppingID' })
  toppingID: number;

  @Column({ type: 'bigint', name: 'ToppingProductRef' })
  toppingProductRef: number;

  @Column({ type: 'bigint', name: 'RetailProductRef' })
  retailProductRef: number;

  @Column({ type: 'integer', name: 'DisplayOrder', nullable: true })
  displayOrder: number | null;

  @Column({ type: 'character varying', name: 'ProductTitle' })
  productTitle: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}