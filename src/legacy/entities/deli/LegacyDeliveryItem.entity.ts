import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DeliveryItem' })
export class LegacyDeliveryItem {
  @PrimaryColumn({ type: 'bigint', name: 'DeliveryItemID' })
  deliveryItemID: number;

  @Column({ type: 'bigint', name: 'DeliveryRef' })
  deliveryRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'CounterpartRef' })
  counterpartRef: number;

  @Column({ type: 'numeric', name: 'DeductionQty', nullable: true })
  deductionQty: number | null;

  @Column({ type: 'numeric', name: 'AdditionQty', nullable: true })
  additionQty: number | null;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'bigint', name: 'PurchaseRequestItemRef', nullable: true })
  purchaseRequestItemRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'InitialQuantity', nullable: true })
  initialQuantity: number | null;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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

  @Column({ type: 'boolean', name: 'QualityControl' })
  qualityControl: boolean;

  @Column({ type: 'bigint', name: 'DeliveryNoticeItemRef', nullable: true })
  deliveryNoticeItemRef: number | null;

}