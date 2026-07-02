import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseRequestItemSupplier' })
export class LegacyPurchaseRequestItemSupplier {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseRequestItemSupplierID' })
  purchaseRequestItemSupplierID: number;

  @Column({ type: 'bigint', name: 'PurchaseRequestItemRef' })
  purchaseRequestItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

}