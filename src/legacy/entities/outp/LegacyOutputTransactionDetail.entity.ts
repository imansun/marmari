import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OutputTransactionDetail' })
export class LegacyOutputTransactionDetail {
  @PrimaryColumn({ type: 'bigint', name: 'OutputTransactionDetailID' })
  outputTransactionDetailID: number;

  @Column({ type: 'bigint', name: 'OutputTransactionRef' })
  outputTransactionRef: number;

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

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}