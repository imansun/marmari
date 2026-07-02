import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOfficeRegionalDivision' })
export class LegacySalesOfficeRegionalDivision {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOfficeRegionalDivisionID' })
  salesOfficeRegionalDivisionID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef' })
  regionalDivisionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}