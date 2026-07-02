import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionOperationMaterialInventoryVoucher' })
export class LegacyInspectionOperationMaterialInventoryVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionOperationMaterialInventoryVoucherID' })
  inspectionOperationMaterialInventoryVoucherID: number;

  @Column({ type: 'bigint', name: 'InspectionOperationMaterialRef' })
  inspectionOperationMaterialRef: number;

  @Column({ type: 'boolean', name: 'IsAutoConsume' })
  isAutoConsume: boolean;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'integer', name: 'IssueMethod', nullable: true })
  issueMethod: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'InterStoreRef', nullable: true })
  interStoreRef: number | null;

}