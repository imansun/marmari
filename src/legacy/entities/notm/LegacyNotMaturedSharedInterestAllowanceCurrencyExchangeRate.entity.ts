import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotMaturedSharedInterestAllowanceCurrencyExchangeRate' })
export class LegacyNotMaturedSharedInterestAllowanceCurrencyExchangeRate {
  @PrimaryColumn({ type: 'bigint', name: 'NotMaturedSharedInterestAllowanceCurrencyExchangeRateID' })
  notMaturedSharedInterestAllowanceCurrencyExchangeRateID: number;

  @Column({ type: 'bigint', name: 'NotMaturedSharedInterestAllowanceRef' })
  notMaturedSharedInterestAllowanceRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}