import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaturedSharedInterestAllowanceCurrencyExchangeRate' })
export class LegacyMaturedSharedInterestAllowanceCurrencyExchangeRate {
  @PrimaryColumn({ type: 'bigint', name: 'MaturedSharedInterestAllowanceCurrencyExchangeRateID' })
  maturedSharedInterestAllowanceCurrencyExchangeRateID: number;

  @Column({ type: 'bigint', name: 'MaturedSharedInterestAllowanceRef' })
  maturedSharedInterestAllowanceRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}