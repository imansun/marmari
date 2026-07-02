import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailInteriorSectionShop' })
export class LegacyRetailInteriorSectionShop {
  @PrimaryColumn({ type: 'bigint', name: 'RetailInteriorSectionShopID' })
  retailInteriorSectionShopID: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef' })
  retailInteriorSectionRef: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'CostCenterRef', nullable: true })
  costCenterRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}