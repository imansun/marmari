import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerUnit' })
export class LegacyTaxPayerUnit {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerUnitID' })
  taxPayerUnitID: number;

  @Column({ type: 'bigint', name: 'Code' })
  code: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}