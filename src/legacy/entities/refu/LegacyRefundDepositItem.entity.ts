import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RefundDepositItem' })
export class LegacyRefundDepositItem {
  @PrimaryColumn({ type: 'bigint', name: 'RefundDepositItemID' })
  refundDepositItemID: number;

  @Column({ type: 'bigint', name: 'RefundDepositRef' })
  refundDepositRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'DepositItemRef' })
  depositItemRef: number;

  @Column({ type: 'numeric', name: 'RequestedAmount' })
  requestedAmount: number;

  @Column({ type: 'numeric', name: 'RefundAmount' })
  refundAmount: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}