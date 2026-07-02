import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Cardex' })
export class LegacyCardex {
  @PrimaryColumn({ type: 'bigint', name: 'CardexID' })
  cardexID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'character varying', name: 'TrackingFactor', nullable: true })
  trackingFactor: string | null;

  @Column({ type: 'timestamp without time zone', name: 'LastPricingDate', nullable: true })
  lastPricingDate: Date | null;

  @Column({ type: 'bigint', name: 'LedgerFiscalYearRef', nullable: true })
  ledgerFiscalYearRef: number | null;

  @Column({ type: 'integer', name: 'PricingMethod' })
  pricingMethod: number;

}