import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReturnDocumentAdjustmentData' })
export class LegacyReturnDocumentAdjustmentData {
  @PrimaryColumn({ type: 'bigint', name: 'ReturnAdjustmentDataID' })
  returnAdjustmentDataID: number;

  @Column({ type: 'bigint', name: 'ReturnDocumentRef' })
  returnDocumentRef: number;

  @Column({ type: 'integer', name: 'ReturnDocumentType' })
  returnDocumentType: number;

  @Column({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number;

  @Column({ type: 'bigint', name: 'InvoiceItemRef', nullable: true })
  invoiceItemRef: number | null;

  @Column({ type: 'bigint', name: 'InvoiceBusinessPolicyRef' })
  invoiceBusinessPolicyRef: number;

  @Column({ type: 'numeric', name: 'InitialValue', nullable: true })
  initialValue: number | null;

  @Column({ type: 'numeric', name: 'InitialPrice' })
  initialPrice: number;

  @Column({ type: 'numeric', name: 'PreviousAdjustmentsValues', nullable: true })
  previousAdjustmentsValues: number | null;

  @Column({ type: 'numeric', name: 'PreviousAdjustmentsPrices' })
  previousAdjustmentsPrices: number;

  @Column({ type: 'numeric', name: 'NewValue', nullable: true })
  newValue: number | null;

  @Column({ type: 'numeric', name: 'NewPrice' })
  newPrice: number;

  @Column({ type: 'numeric', name: 'AdjustmentValue', nullable: true })
  adjustmentValue: number | null;

  @Column({ type: 'numeric', name: 'AdjustmentPrice' })
  adjustmentPrice: number;

  @Column({ type: 'bigint', name: 'InvoiceFreeProductItemRef', nullable: true })
  invoiceFreeProductItemRef: number | null;

  @Column({ type: 'bigint', name: 'AdjustmentBusinessPolicyRef' })
  adjustmentBusinessPolicyRef: number;

  @Column({ type: 'numeric', name: 'ApplyedAdjustmentValue', nullable: true })
  applyedAdjustmentValue: number | null;

  @Column({ type: 'numeric', name: 'ApplyedAdjustmentPrice' })
  applyedAdjustmentPrice: number;

  @Column({ type: 'bigint', name: 'InvoiceFreeProductUnitRef', nullable: true })
  invoiceFreeProductUnitRef: number | null;

  @Column({ type: 'bigint', name: 'RelatedReturnDocumentFreeProductItemRef', nullable: true })
  relatedReturnDocumentFreeProductItemRef: number | null;

  @Column({ type: 'integer', name: 'ApplyType' })
  applyType: number;

  @Column({ type: 'timestamp without time zone', name: 'RegisterDateTime' })
  registerDateTime: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}