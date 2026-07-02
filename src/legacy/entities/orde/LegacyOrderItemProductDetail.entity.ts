import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrderItemProductDetail' })
export class LegacyOrderItemProductDetail {
  @PrimaryColumn({ type: 'bigint', name: 'OrderItemProductDetailID' })
  orderItemProductDetailID: number;

  @Column({ type: 'bigint', name: 'OrderRef' })
  orderRef: number;

  @Column({ type: 'bigint', name: 'OrderItemRef' })
  orderItemRef: number;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bigint', name: 'PartUnitRef', nullable: true })
  partUnitRef: number | null;

  @Column({ type: 'bigint', name: 'ServiceRef', nullable: true })
  serviceRef: number | null;

  @Column({ type: 'numeric', name: 'InitialQuantity' })
  initialQuantity: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}