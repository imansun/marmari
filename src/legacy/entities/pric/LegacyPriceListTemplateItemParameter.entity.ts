import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListTemplateItemParameter' })
export class LegacyPriceListTemplateItemParameter {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListTemplateItemParameterID' })
  priceListTemplateItemParameterID: number;

  @Column({ type: 'integer', name: 'RetailPriceListParameter' })
  retailPriceListParameter: number;

  @Column({ type: 'bigint', name: 'PriceListTemplateRef' })
  priceListTemplateRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

}