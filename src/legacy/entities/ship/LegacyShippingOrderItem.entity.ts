import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShippingOrderItem' })
export class LegacyShippingOrderItem {
  @PrimaryColumn({ type: 'bigint', name: 'ShippingOrderItemID' })
  shippingOrderItemID: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'bigint', name: 'ShippingOrderRef' })
  shippingOrderRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'DeliverableQuantity' })
  deliverableQuantity: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'DeliveryAddressRef', nullable: true })
  deliveryAddressRef: number | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'integer', name: 'PriorityNo' })
  priorityNo: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerPartyRef', nullable: true })
  customerPartyRef: number | null;

  @Column({ type: 'integer', name: 'CustomerType', nullable: true })
  customerType: number | null;

  @Column({ type: 'integer', name: 'DeliveryAddressType', nullable: true })
  deliveryAddressType: number | null;

  @Column({ type: 'text', name: 'ExtraData' })
  extraData: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'PackageRef', nullable: true })
  packageRef: number | null;

  @Column({ type: 'numeric', name: 'PackagingWeight', nullable: true })
  packagingWeight: number | null;

  @Column({ type: 'bigint', name: 'PackagingWeightUnitRef', nullable: true })
  packagingWeightUnitRef: number | null;

  @Column({ type: 'numeric', name: 'QuantityPerPackage', nullable: true })
  quantityPerPackage: number | null;

  @Column({ type: 'numeric', name: 'MaxQuantityPerPackage', nullable: true })
  maxQuantityPerPackage: number | null;

  @Column({ type: 'numeric', name: 'MinQuantityPerPackage', nullable: true })
  minQuantityPerPackage: number | null;

  @Column({ type: 'numeric', name: 'DeliveryQuantityMaxIncreasePercent', nullable: true })
  deliveryQuantityMaxIncreasePercent: number | null;

  @Column({ type: 'boolean', name: 'ByPassIssuePermit' })
  byPassIssuePermit: boolean;

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

  @Column({ type: 'bigint', name: 'BaseDocumentRef' })
  baseDocumentRef: number;

  @Column({ type: 'character varying', name: 'CustomRecipientName', nullable: true })
  customRecipientName: string | null;

  @Column({ type: 'character varying', name: 'CustomRecipientPhone', nullable: true })
  customRecipientPhone: string | null;

  @Column({ type: 'character varying', name: 'CustomRecipientEmail', nullable: true })
  customRecipientEmail: string | null;

  @Column({ type: 'boolean', name: 'CustomRecipientNameHasBase', nullable: true })
  customRecipientNameHasBase: boolean | null;

  @Column({ type: 'boolean', name: 'CustomRecipientPhoneHasBase', nullable: true })
  customRecipientPhoneHasBase: boolean | null;

  @Column({ type: 'boolean', name: 'CustomRecipientEmailHasBase', nullable: true })
  customRecipientEmailHasBase: boolean | null;

}