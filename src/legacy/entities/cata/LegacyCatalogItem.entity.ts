import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CatalogItem' })
export class LegacyCatalogItem {
  @PrimaryColumn({ type: 'bigint', name: 'CatalogItemID' })
  catalogItemID: number;

  @Column({ type: 'bigint', name: 'CatalogRef' })
  catalogRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Barcode', nullable: true })
  barcode: string | null;

  @Column({ type: 'character varying', name: 'TechnicalSpecification', nullable: true })
  technicalSpecification: string | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'character varying', name: 'UnitAbbreviation', nullable: true })
  unitAbbreviation: string | null;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'numeric', name: 'ConsumerPrice', nullable: true })
  consumerPrice: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'character varying', name: 'CurrencyAbbreviation', nullable: true })
  currencyAbbreviation: string | null;

  @Column({ type: 'integer', name: 'LeadTime', nullable: true })
  leadTime: number | null;

  @Column({ type: 'character varying', name: 'ManufacturerName', nullable: true })
  manufacturerName: string | null;

  @Column({ type: 'character varying', name: 'ManufacturerPartID', nullable: true })
  manufacturerPartID: string | null;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate', nullable: true })
  effectiveDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Message', nullable: true })
  message: string | null;

}