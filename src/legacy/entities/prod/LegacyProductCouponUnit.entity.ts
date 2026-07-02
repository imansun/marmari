import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCouponUnit' })
export class LegacyProductCouponUnit {
  @PrimaryColumn({ type: 'bigint', name: 'ProductCouponUnitID' })
  productCouponUnitID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}