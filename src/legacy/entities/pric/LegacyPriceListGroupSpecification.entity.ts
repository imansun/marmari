import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListGroupSpecification' })
export class LegacyPriceListGroupSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListGroupSpecificationID' })
  priceListGroupSpecificationID: number;

  @Column({ type: 'bigint', name: 'SpecificationRef' })
  specificationRef: number;

  @Column({ type: 'bigint', name: 'SpecificationItemRef', nullable: true })
  specificationItemRef: number | null;

  @Column({ type: 'bigint', name: 'PriceListGroupParameterRef' })
  priceListGroupParameterRef: number;

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