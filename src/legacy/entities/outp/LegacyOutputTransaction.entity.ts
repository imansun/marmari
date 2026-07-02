import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OutputTransaction' })
export class LegacyOutputTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'OutputTransactionID' })
  outputTransactionID: number;

  @Column({ type: 'bigint', name: 'CostCenterExRef' })
  costCenterExRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'WithReferenceInventoryProduceQuantity' })
  withReferenceInventoryProduceQuantity: number;

  @Column({ type: 'numeric', name: 'WithReferenceReturnedInventoryProduceQuantity' })
  withReferenceReturnedInventoryProduceQuantity: number;

  @Column({ type: 'numeric', name: 'WithoutReferenceInventoryProduceQuantity' })
  withoutReferenceInventoryProduceQuantity: number;

  @Column({ type: 'numeric', name: 'WithoutReferenceReturnedInventoryProduceQuantity' })
  withoutReferenceReturnedInventoryProduceQuantity: number;

  @Column({ type: 'numeric', name: 'DeliveryQuantity' })
  deliveryQuantity: number;

  @Column({ type: 'numeric', name: 'DeliveryDiscard' })
  deliveryDiscard: number;

  @Column({ type: 'numeric', name: 'ReturnedDeliveryQuantity' })
  returnedDeliveryQuantity: number;

  @Column({ type: 'numeric', name: 'NetIntactQuantity' })
  netIntactQuantity: number;

  @Column({ type: 'numeric', name: 'WithReferenceInventoryDiscardQuantity' })
  withReferenceInventoryDiscardQuantity: number;

  @Column({ type: 'numeric', name: 'WithReferenceReturnedInventoryDiscardQuantity' })
  withReferenceReturnedInventoryDiscardQuantity: number;

  @Column({ type: 'numeric', name: 'WithoutReferenceInventoryDiscardQuantity' })
  withoutReferenceInventoryDiscardQuantity: number;

  @Column({ type: 'numeric', name: 'WithoutReferenceReturnedInventoryDiscardQuantity' })
  withoutReferenceReturnedInventoryDiscardQuantity: number;

  @Column({ type: 'numeric', name: 'NetDiscardQuantity' })
  netDiscardQuantity: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}