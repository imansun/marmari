import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InputTransactionWorkstation' })
export class LegacyInputTransactionWorkstation {
  @PrimaryColumn({ type: 'bigint', name: 'InputTransactionWorkstationID' })
  inputTransactionWorkstationID: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'bigint', name: 'InputTransactionRef' })
  inputTransactionRef: number;

  @Column({ type: 'numeric', name: 'WithoutReferenceInventoryConsumeProduceNetQuantity' })
  withoutReferenceInventoryConsumeProduceNetQuantity: number;

  @Column({ type: 'numeric', name: 'RecycleQuantity' })
  recycleQuantity: number;

  @Column({ type: 'numeric', name: 'DeliveryQuantity' })
  deliveryQuantity: number;

  @Column({ type: 'numeric', name: 'NetQuantity' })
  netQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'BillOfMaterialRef', nullable: true })
  billOfMaterialRef: number | null;

  @Column({ type: 'numeric', name: 'WithReferenceInventoryConsumeProduceNetQuantity' })
  withReferenceInventoryConsumeProduceNetQuantity: number;

}