import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SubcontractingOrderMaterial' })
export class LegacySubcontractingOrderMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'SubcontractingOrderMaterialID' })
  subcontractingOrderMaterialID: number;

  @Column({ type: 'bigint', name: 'SubcontractingOrderRef' })
  subcontractingOrderRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'BomItemRef' })
  bomItemRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'boolean', name: 'IsSuppliedBySupplier' })
  isSuppliedBySupplier: boolean;

  @Column({ type: 'smallint', name: 'PartIssueType', nullable: true })
  partIssueType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}