import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListRetailProductSpecification' })
export class LegacyPriceListRetailProductSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListRetailProductSpecificationID' })
  priceListRetailProductSpecificationID: number;

  @Column({ type: 'bigint', name: 'PriceListRetailProductRef' })
  priceListRetailProductRef: number;

  @Column({ type: 'bigint', name: 'SpecificationRef' })
  specificationRef: number;

  @Column({ type: 'bigint', name: 'SpecificationItemRef', nullable: true })
  specificationItemRef: number | null;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DateValue', nullable: true })
  dateValue: Date | null;

  @Column({ type: 'numeric', name: 'DecimalValue', nullable: true })
  decimalValue: number | null;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}