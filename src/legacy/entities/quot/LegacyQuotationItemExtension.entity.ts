import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'QuotationItemExtension' })
export class LegacyQuotationItemExtension {
  @PrimaryColumn({ type: 'bigint', name: 'QuotationItemExtensionID' })
  quotationItemExtensionID: number;

  @Column({ type: 'bigint', name: 'QuotationExtensionRef' })
  quotationExtensionRef: number;

  @Column({ type: 'bigint', name: 'QuotationItemRef' })
  quotationItemRef: number;

  @Column({ type: 'character varying', name: 'SupplierProductCode', nullable: true })
  supplierProductCode: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}