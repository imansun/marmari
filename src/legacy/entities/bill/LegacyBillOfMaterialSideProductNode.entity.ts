import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BillOfMaterialSideProductNode' })
export class LegacyBillOfMaterialSideProductNode {
  @PrimaryColumn({ type: 'bigint', name: 'BillOfMaterialSideProductNodeID' })
  billOfMaterialSideProductNodeID: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialNodeRef' })
  billOfMaterialNodeRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'boolean', name: 'IsByProduct' })
  isByProduct: boolean;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}