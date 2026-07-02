import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BillOfMaterialRecyclingNode' })
export class LegacyBillOfMaterialRecyclingNode {
  @PrimaryColumn({ type: 'bigint', name: 'BillOfMaterialRecyclingNodeID' })
  billOfMaterialRecyclingNodeID: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialNodeRef' })
  billOfMaterialNodeRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}