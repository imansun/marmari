import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerCurrency' })
export class LegacyCustomerCurrency {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerCurrencyID' })
  customerCurrencyID: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerGroupRef', nullable: true })
  customerGroupRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}