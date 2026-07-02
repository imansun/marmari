import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailInteriorSectionProduct' })
export class LegacyRetailInteriorSectionProduct {
  @PrimaryColumn({ type: 'bigint', name: 'RetailInteriorSectionProductID' })
  retailInteriorSectionProductID: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef' })
  retailInteriorSectionRef: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}