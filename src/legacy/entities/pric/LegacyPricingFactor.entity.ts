import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PricingFactor' })
export class LegacyPricingFactor {
  @PrimaryColumn({ type: 'bigint', name: 'PricingFactorID' })
  pricingFactorID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef' })
  inventoryVoucherRef: number;

  @Column({ type: 'integer', name: 'PricingFactorType' })
  pricingFactorType: number;

  @Column({ type: 'boolean', name: 'IsPercent' })
  isPercent: boolean;

  @Column({ type: 'numeric', name: 'PercentAmount', nullable: true })
  percentAmount: number | null;

  @Column({ type: 'boolean', name: 'IsShare' })
  isShare: boolean;

  @Column({ type: 'integer', name: 'ShareType', nullable: true })
  shareType: number | null;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'bigint', name: 'DL4Ref', nullable: true })
  dL4Ref: number | null;

  @Column({ type: 'bigint', name: 'DL5Ref', nullable: true })
  dL5Ref: number | null;

  @Column({ type: 'bigint', name: 'DL6Ref', nullable: true })
  dL6Ref: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

}