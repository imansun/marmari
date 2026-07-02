import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceCurrency' })
export class LegacySelfServiceCurrency {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceCurrencyID' })
  selfServiceCurrencyID: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}