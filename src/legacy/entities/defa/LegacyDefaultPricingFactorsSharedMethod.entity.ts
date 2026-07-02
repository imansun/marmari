import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DefaultPricingFactorsSharedMethod' })
export class LegacyDefaultPricingFactorsSharedMethod {
  @PrimaryColumn({ type: 'bigint', name: 'DefaultPricingFactorsSharedMethodID' })
  defaultPricingFactorsSharedMethodID: number;

  @Column({ type: 'integer', name: 'PricingFactorType' })
  pricingFactorType: number;

  @Column({ type: 'boolean', name: 'IsPercent' })
  isPercent: boolean;

  @Column({ type: 'boolean', name: 'IsShare' })
  isShare: boolean;

  @Column({ type: 'integer', name: 'ShareType' })
  shareType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}