import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CardexPeriodicRate' })
export class LegacyCardexPeriodicRate {
  @PrimaryColumn({ type: 'bigint', name: 'CardexPeriodicRateID' })
  cardexPeriodicRateID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PricingPeriodRef' })
  pricingPeriodRef: number;

  @Column({ type: 'bigint', name: 'CategoryRef', nullable: true })
  categoryRef: number | null;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'character varying', name: 'TrackingFactor', nullable: true })
  trackingFactor: string | null;

  @Column({ type: 'numeric', name: 'InputQuantity' })
  inputQuantity: number;

  @Column({ type: 'numeric', name: 'InputPrice' })
  inputPrice: number;

  @Column({ type: 'numeric', name: 'PeriodRate' })
  periodRate: number;

  @Column({ type: 'numeric', name: 'OutputQuantity' })
  outputQuantity: number;

  @Column({ type: 'numeric', name: 'OutputPrice' })
  outputPrice: number;

  @Column({ type: 'numeric', name: 'QuantityRemaining' })
  quantityRemaining: number;

  @Column({ type: 'numeric', name: 'PriceRemaining' })
  priceRemaining: number;

}