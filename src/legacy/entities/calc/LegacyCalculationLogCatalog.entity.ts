import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationLogCatalog' })
export class LegacyCalculationLogCatalog {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationLogCatalogID' })
  calculationLogCatalogID: number;

  @Column({ type: 'bigint', name: 'Number' })
  number: number;

  @Column({ type: 'integer', name: 'CatalogType' })
  catalogType: number;

  @Column({ type: 'boolean', name: 'Editable' })
  editable: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}