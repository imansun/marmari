import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceReference' })
export class LegacyPriceReference {
  @PrimaryColumn({ type: 'bigint', name: 'PriceReferenceID' })
  priceReferenceID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'PublishDate' })
  publishDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'boolean', name: 'IsUnitSelected' })
  isUnitSelected: boolean;

  @Column({ type: 'boolean', name: 'IsCountrySelected' })
  isCountrySelected: boolean;

  @Column({ type: 'boolean', name: 'IsRegionalAreaSelected' })
  isRegionalAreaSelected: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}