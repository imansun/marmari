import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InputTransaction' })
export class LegacyInputTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'InputTransactionID' })
  inputTransactionID: number;

  @Column({ type: 'bigint', name: 'CostCenterExRef' })
  costCenterExRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'BeginnigMaterialQuantity' })
  beginnigMaterialQuantity: number;

  @Column({ type: 'numeric', name: 'EndingMaterialQuantity' })
  endingMaterialQuantity: number;

  @Column({ type: 'numeric', name: 'WithReferenceInventoryConsumeQuantity' })
  withReferenceInventoryConsumeQuantity: number;

  @Column({ type: 'numeric', name: 'WithReferenceReturnedInventoryConsumeQuantity' })
  withReferenceReturnedInventoryConsumeQuantity: number;

  @Column({ type: 'numeric', name: 'WithoutReferenceInventoryConsumeQuantity' })
  withoutReferenceInventoryConsumeQuantity: number;

  @Column({ type: 'numeric', name: 'WithoutReferenceReturnedInventoryConsumeQuantity' })
  withoutReferenceReturnedInventoryConsumeQuantity: number;

  @Column({ type: 'numeric', name: 'WithReferenceInventoryProduceQuantity' })
  withReferenceInventoryProduceQuantity: number;

  @Column({ type: 'numeric', name: 'WithReferenceReturnedInventoryProduceQuantity' })
  withReferenceReturnedInventoryProduceQuantity: number;

  @Column({ type: 'numeric', name: 'WithoutReferenceInventoryProduceQuantity' })
  withoutReferenceInventoryProduceQuantity: number;

  @Column({ type: 'numeric', name: 'WithoutReferenceReturnedInventoryProduceQuantity' })
  withoutReferenceReturnedInventoryProduceQuantity: number;

  @Column({ type: 'numeric', name: 'RecycleQuantity' })
  recycleQuantity: number;

  @Column({ type: 'numeric', name: 'ReturnedRecycleQuantity' })
  returnedRecycleQuantity: number;

  @Column({ type: 'numeric', name: 'DeliveryQuantity' })
  deliveryQuantity: number;

  @Column({ type: 'numeric', name: 'ReturnedDeliveryQuantity' })
  returnedDeliveryQuantity: number;

  @Column({ type: 'numeric', name: 'DirectInputMaterialQuantity' })
  directInputMaterialQuantity: number;

  @Column({ type: 'numeric', name: 'NetQuantity' })
  netQuantity: number;

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