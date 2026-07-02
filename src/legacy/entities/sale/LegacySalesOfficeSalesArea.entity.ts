import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOfficeSalesArea' })
export class LegacySalesOfficeSalesArea {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOfficeSalesAreaID' })
  salesOfficeSalesAreaID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bigint', name: 'SalesAreaRef' })
  salesAreaRef: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}