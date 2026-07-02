import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DeliveryReturnItem' })
export class LegacyDeliveryReturnItem {
  @PrimaryColumn({ type: 'bigint', name: 'DeliveryReturnItemID' })
  deliveryReturnItemID: number;

  @Column({ type: 'bigint', name: 'DeliveryReturnRef' })
  deliveryReturnRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'bigint', name: 'PurchaseRequestItemRef', nullable: true })
  purchaseRequestItemRef: number | null;

  @Column({ type: 'bigint', name: 'DeliveryItemRef' })
  deliveryItemRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'integer', name: 'DiscrepancyType' })
  discrepancyType: number;

  @Column({ type: 'integer', name: 'SettlementType', nullable: true })
  settlementType: number | null;

  @Column({ type: 'integer', name: 'ResupplyType', nullable: true })
  resupplyType: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'numeric', name: 'Cost', nullable: true })
  cost: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'RequestBranchRef' })
  requestBranchRef: number;

  @Column({ type: 'bigint', name: 'ReceiverBranchRef' })
  receiverBranchRef: number;

  @Column({ type: 'bigint', name: 'PurchasingAgentRef' })
  purchasingAgentRef: number;

}