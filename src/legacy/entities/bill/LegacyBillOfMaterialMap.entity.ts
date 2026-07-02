import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BillOfMaterialMap' })
export class LegacyBillOfMaterialMap {
  @PrimaryColumn({ type: 'bigint', name: 'BillOfMaterialMapID' })
  billOfMaterialMapID: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialRef', nullable: true })
  billOfMaterialRef: number | null;

  @Column({ type: 'bigint', name: 'RoutingRef', nullable: true })
  routingRef: number | null;

  @Column({ type: 'bigint', name: 'BomRef' })
  bomRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Type', default: 1 })
  type: number;

}