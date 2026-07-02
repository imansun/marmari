import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ModiranPurchasePaymentGoodsGroupTayydknndgan' })
export class LegacyModiranPurchasePaymentGoodsGroupTayydknndgan {
  @PrimaryColumn({ type: 'bigint', name: 'ModiranPurchasePaymentGoodsGroupTayydknndganID' })
  modiranPurchasePaymentGoodsGroupTayydknndganID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'integer', name: 'GoodsGroup', nullable: true })
  goodsGroup: number | null;

  @Column({ type: 'bigint', name: 'RespectiveManagerRef', nullable: true })
  respectiveManagerRef: number | null;

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