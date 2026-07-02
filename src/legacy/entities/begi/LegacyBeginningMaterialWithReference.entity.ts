import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BeginningMaterialWithReference' })
export class LegacyBeginningMaterialWithReference {
  @PrimaryColumn({ type: 'bigint', name: 'BeginningMaterialWithReferenceID' })
  beginningMaterialWithReferenceID: number;

  @Column({ type: 'bigint', name: 'BeginningMaterialRef' })
  beginningMaterialRef: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialRef' })
  billOfMaterialRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}