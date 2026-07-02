import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOfficeCurrency' })
export class LegacySalesOfficeCurrency {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOfficeCurrencyID' })
  salesOfficeCurrencyID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}