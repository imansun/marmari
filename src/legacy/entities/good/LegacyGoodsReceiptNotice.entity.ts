import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GoodsReceiptNotice' })
export class LegacyGoodsReceiptNotice {
  @PrimaryColumn({ type: 'bigint', name: 'GoodsReceiptNoticeID' })
  goodsReceiptNoticeID: number;

  @Column({ type: 'bigint', name: 'OrderRef', nullable: true })
  orderRef: number | null;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}