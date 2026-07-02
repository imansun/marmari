import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InquiryItem' })
export class LegacyInquiryItem {
  @PrimaryColumn({ type: 'bigint', name: 'InquiryItemID' })
  inquiryItemID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'InquiryRef' })
  inquiryRef: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'bigint', name: 'PurchasingAgentRef', nullable: true })
  purchasingAgentRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'ComparisonCurrencyRef', nullable: true })
  comparisonCurrencyRef: number | null;

}