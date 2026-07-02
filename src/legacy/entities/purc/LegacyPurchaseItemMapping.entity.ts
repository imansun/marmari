import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseItemMapping' })
export class LegacyPurchaseItemMapping {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseItemMappingID' })
  purchaseItemMappingID: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'character varying', name: 'SupplierProductCode' })
  supplierProductCode: string;

  @Column({ type: 'character varying', name: 'SupplierProductDescription' })
  supplierProductDescription: string;

  @Column({ type: 'character varying', name: 'Barcode', nullable: true })
  barcode: string | null;

  @Column({ type: 'character varying', name: 'TechnicalSpecification', nullable: true })
  technicalSpecification: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}