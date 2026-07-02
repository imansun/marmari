import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceCheckerSpecification' })
export class LegacyPriceCheckerSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'PriceCheckerSpecificationID' })
  priceCheckerSpecificationID: number;

  @Column({ type: 'bigint', name: 'PriceCheckerRef' })
  priceCheckerRef: number;

  @Column({ type: 'bigint', name: 'SpecificationRef' })
  specificationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}