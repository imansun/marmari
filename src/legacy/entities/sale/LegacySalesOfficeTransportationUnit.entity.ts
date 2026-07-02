import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOfficeTransportationUnit' })
export class LegacySalesOfficeTransportationUnit {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOfficeTransportationUnitID' })
  salesOfficeTransportationUnitID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bigint', name: 'TransportationUnitRef' })
  transportationUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

}