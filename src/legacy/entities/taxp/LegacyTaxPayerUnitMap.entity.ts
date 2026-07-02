import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerUnitMap' })
export class LegacyTaxPayerUnitMap {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerUnitMapID' })
  taxPayerUnitMapID: number;

  @Column({ type: 'bigint', name: 'TaxPayerUnitRef' })
  taxPayerUnitRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}