import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BillOfMaterialAlternativeNode' })
export class LegacyBillOfMaterialAlternativeNode {
  @PrimaryColumn({ type: 'bigint', name: 'BillOfMaterialAlternativeNodeID' })
  billOfMaterialAlternativeNodeID: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialNodeRef' })
  billOfMaterialNodeRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'numeric', name: 'Ratio' })
  ratio: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}