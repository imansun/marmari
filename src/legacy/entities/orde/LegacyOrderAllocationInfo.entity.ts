import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrderAllocationInfo' })
export class LegacyOrderAllocationInfo {
  @PrimaryColumn({ type: 'bigint', name: 'OrderAllocationInfoID' })
  orderAllocationInfoID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'numeric', name: 'AllocationPercent' })
  allocationPercent: number;

  @Column({ type: 'numeric', name: 'PackageSize' })
  packageSize: number;

  @Column({ type: 'integer', name: 'LeadTimeType' })
  leadTimeType: number;

  @Column({ type: 'integer', name: 'LeadTime' })
  leadTime: number;

}