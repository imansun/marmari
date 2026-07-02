import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CurrentShareCurrencyExchangeRate' })
export class LegacyCurrentShareCurrencyExchangeRate {
  @PrimaryColumn({ type: 'bigint', name: 'CurrentShareCurrencyExchangeRateID' })
  currentShareCurrencyExchangeRateID: number;

  @Column({ type: 'bigint', name: 'CurrentShareRef' })
  currentShareRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}