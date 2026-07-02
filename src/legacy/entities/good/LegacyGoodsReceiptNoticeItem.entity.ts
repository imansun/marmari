import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GoodsReceiptNoticeItem' })
export class LegacyGoodsReceiptNoticeItem {
  @PrimaryColumn({ type: 'bigint', name: 'GoodsReceiptNoticeItemID' })
  goodsReceiptNoticeItemID: number;

  @Column({ type: 'bigint', name: 'GoodsReceiptNoticeRef' })
  goodsReceiptNoticeRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'OrderItemRef' })
  orderItemRef: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}