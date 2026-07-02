import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationMaterialInventoryVoucher' })
export class LegacyInspectionConfirmationMaterialInventoryVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationMaterialInventoryVoucherID' })
  inspectionConfirmationMaterialInventoryVoucherID: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationMaterialRef' })
  inspectionConfirmationMaterialRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef' })
  inventoryVoucherSpecificationRef: number;

  @Column({ type: 'bigint', name: 'InterStoreRef' })
  interStoreRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}