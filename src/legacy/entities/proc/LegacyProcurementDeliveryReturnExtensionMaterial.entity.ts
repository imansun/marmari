import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurementDeliveryReturnExtensionMaterial' })
export class LegacyProcurementDeliveryReturnExtensionMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurementDeliveryReturnExtensionMaterialID' })
  procurementDeliveryReturnExtensionMaterialID: number;

  @Column({ type: 'bigint', name: 'ProcurementDeliveryReturnExtensionItemRef' })
  procurementDeliveryReturnExtensionItemRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'boolean', name: 'IsSuppliedBySupplier' })
  isSuppliedBySupplier: boolean;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'bigint', name: 'BomItemRef' })
  bomItemRef: number;

  @Column({ type: 'smallint', name: 'PartIssueType', nullable: true })
  partIssueType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}