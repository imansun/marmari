import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceOperationMaterialInventoryVoucher' })
export class LegacyServiceOperationMaterialInventoryVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceOperationMaterialInventoryVoucherID' })
  serviceOperationMaterialInventoryVoucherID: number;

  @Column({ type: 'bigint', name: 'ServiceOperationMaterialRef' })
  serviceOperationMaterialRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'boolean', name: 'IsAutoConsume' })
  isAutoConsume: boolean;

  @Column({ type: 'integer', name: 'IssueMethod', nullable: true })
  issueMethod: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'InterStoreRef', nullable: true })
  interStoreRef: number | null;

}