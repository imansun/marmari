import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseItemToSupplierRelationship' })
export class LegacyPurchaseItemToSupplierRelationship {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseItemToSupplierRelationshipID' })
  purchaseItemToSupplierRelationshipID: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef', nullable: true })
  purchaseItemRef: number | null;

  @Column({ type: 'bigint', name: 'SupplierRef', nullable: true })
  supplierRef: number | null;

  @Column({ type: 'bigint', name: 'PurchaseItemGroupRef', nullable: true })
  purchaseItemGroupRef: number | null;

  @Column({ type: 'bigint', name: 'SupplierGroupRef', nullable: true })
  supplierGroupRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}