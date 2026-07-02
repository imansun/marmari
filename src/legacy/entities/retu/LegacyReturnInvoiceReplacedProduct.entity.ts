import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReturnInvoiceReplacedProduct' })
export class LegacyReturnInvoiceReplacedProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ReturnInvoiceReplacedProductID' })
  returnInvoiceReplacedProductID: number;

  @Column({ type: 'bigint', name: 'ReturnInvoiceRef' })
  returnInvoiceRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'Fee' })
  fee: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'bigint', name: 'FeeBusinessPolicyRef', nullable: true })
  feeBusinessPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'FeeBusinessPolicyConditionRef', nullable: true })
  feeBusinessPolicyConditionRef: number | null;

  @Column({ type: 'bigint', name: 'FeeBusinessPolicyConditionRowRef', nullable: true })
  feeBusinessPolicyConditionRowRef: number | null;

  @Column({ type: 'text', name: 'FeeBusinessPolicyValue', nullable: true })
  feeBusinessPolicyValue: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor1', nullable: true })
  trackingFactor1: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor2', nullable: true })
  trackingFactor2: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor3', nullable: true })
  trackingFactor3: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor4', nullable: true })
  trackingFactor4: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor5', nullable: true })
  trackingFactor5: string | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef1', nullable: true })
  partTrackingFactorRef1: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef2', nullable: true })
  partTrackingFactorRef2: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef3', nullable: true })
  partTrackingFactorRef3: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef4', nullable: true })
  partTrackingFactorRef4: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef5', nullable: true })
  partTrackingFactorRef5: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode1', nullable: true })
  trackingFactorInputMode1: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode2', nullable: true })
  trackingFactorInputMode2: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode3', nullable: true })
  trackingFactorInputMode3: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode4', nullable: true })
  trackingFactorInputMode4: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode5', nullable: true })
  trackingFactorInputMode5: number | null;

  @Column({ type: 'character varying', name: 'TrackingFactorValue', nullable: true })
  trackingFactorValue: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

}