import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExitFromOrganizationItemPriceElement' })
export class LegacyExitFromOrganizationItemPriceElement {
  @PrimaryColumn({ type: 'bigint', name: 'ExitFromOrganizationItemPriceElementID' })
  exitFromOrganizationItemPriceElementID: number;

  @Column({ type: 'bigint', name: 'ExitFromOrganizationItemRef' })
  exitFromOrganizationItemRef: number;

  @Column({ type: 'integer', name: 'ExitFromOrganizationPriceElementType' })
  exitFromOrganizationPriceElementType: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyAmount' })
  operationalCurrencyAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}