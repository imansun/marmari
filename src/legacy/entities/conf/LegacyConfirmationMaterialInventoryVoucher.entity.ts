import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationMaterialInventoryVoucher' })
export class LegacyConfirmationMaterialInventoryVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationMaterialInventoryVoucherID' })
  confirmationMaterialInventoryVoucherID: number;

  @Column({ type: 'bigint', name: 'ConfirmationMaterialRef' })
  confirmationMaterialRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef' })
  inventoryVoucherSpecificationRef: number;

  @Column({ type: 'bigint', name: 'InterStoreRef' })
  interStoreRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}