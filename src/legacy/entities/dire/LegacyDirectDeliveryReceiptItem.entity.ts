import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DirectDeliveryReceiptItem' })
export class LegacyDirectDeliveryReceiptItem {
  @PrimaryColumn({ type: 'bigint', name: 'DirectDeliveryReceiptItemID' })
  directDeliveryReceiptItemID: number;

  @Column({ type: 'bigint', name: 'DirectDeliveryReceiptRef' })
  directDeliveryReceiptRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'bigint', name: 'PurchaseRequestItemRef', nullable: true })
  purchaseRequestItemRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'RequestBranchRef' })
  requestBranchRef: number;

  @Column({ type: 'bigint', name: 'ReceiverBranchRef' })
  receiverBranchRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}