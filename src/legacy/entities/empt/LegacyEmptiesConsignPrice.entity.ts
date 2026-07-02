import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmptiesConsignPrice' })
export class LegacyEmptiesConsignPrice {
  @PrimaryColumn({ type: 'bigint', name: 'EmptiesConsignPriceID' })
  emptiesConsignPriceID: number;

  @Column({ type: 'bigint', name: 'EmptiesRef' })
  emptiesRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}