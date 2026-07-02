import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrderConfirmationItem' })
export class LegacyOrderConfirmationItem {
  @PrimaryColumn({ type: 'bigint', name: 'OrderConfirmationItemID' })
  orderConfirmationItemID: number;

  @Column({ type: 'bigint', name: 'OrderConfirmationRef' })
  orderConfirmationRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'OrderItemRef' })
  orderItemRef: number;

  @Column({ type: 'numeric', name: 'ApprovedAmount' })
  approvedAmount: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'timestamp without time zone', name: 'EstimatedDeliveryDate', nullable: true })
  estimatedDeliveryDate: Date | null;

  @Column({ type: 'numeric', name: 'Fee', nullable: true })
  fee: number | null;

  @Column({ type: 'character varying', name: 'TraceID', nullable: true })
  traceID: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}