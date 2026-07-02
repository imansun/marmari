import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BillOfMaterialMapItem' })
export class LegacyBillOfMaterialMapItem {
  @PrimaryColumn({ type: 'bigint', name: 'BillOfMaterialMapItemID' })
  billOfMaterialMapItemID: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialMapRef' })
  billOfMaterialMapRef: number;

  @Column({ type: 'bigint', name: 'RoutingOperationRef' })
  routingOperationRef: number;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}