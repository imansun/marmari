import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DeliveryNoticeItem' })
export class LegacyDeliveryNoticeItem {
  @PrimaryColumn({ type: 'bigint', name: 'DeliveryNoticeItemID' })
  deliveryNoticeItemID: number;

  @Column({ type: 'bigint', name: 'DeliveryNoticeRef' })
  deliveryNoticeRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'OrderItemRef' })
  orderItemRef: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'EntityUnitRef' })
  entityUnitRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'TraceID', nullable: true })
  traceID: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}