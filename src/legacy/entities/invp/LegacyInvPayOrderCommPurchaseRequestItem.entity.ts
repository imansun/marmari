import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvPayOrderCommPurchaseRequestItem' })
export class LegacyInvPayOrderCommPurchaseRequestItem {
  @PrimaryColumn({ type: 'bigint', name: 'InvPayOrderCommPurchaseRequestItemID' })
  invPayOrderCommPurchaseRequestItemID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'bigint', name: 'PurchaseRequestNoRef', nullable: true })
  purchaseRequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'BenedictoryGoodsCode', nullable: true })
  benedictoryGoodsCode: string | null;

  @Column({ type: 'character varying', name: 'BenedictoryGoodsName', nullable: true })
  benedictoryGoodsName: string | null;

  @Column({ type: 'numeric', name: 'BenedictoryQuantity', nullable: true })
  benedictoryQuantity: number | null;

  @Column({ type: 'character varying', name: 'AssayCredit', nullable: true })
  assayCredit: string | null;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'bigint', name: 'NrkhkhRef', nullable: true })
  nrkhkhRef: number | null;

  @Column({ type: 'numeric', name: 'TestRate', nullable: true })
  testRate: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Tarykhkhkh', nullable: true })
  tarykhkhkh: Date | null;

  @Column({ type: 'character varying', name: 'DoerSecure', nullable: true })
  doerSecure: string | null;

  @Column({ type: 'character varying', name: 'ItemComments', nullable: true })
  itemComments: string | null;

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

  @Column({ type: 'numeric', name: 'InquiryRate', nullable: true })
  inquiryRate: number | null;

  @Column({ type: 'numeric', name: 'InquiryAmount', nullable: true })
  inquiryAmount: number | null;

  @Column({ type: 'numeric', name: 'PurchaseRequestQuantity', nullable: true })
  purchaseRequestQuantity: number | null;

  @Column({ type: 'bigint', name: 'RequestGoodsCodeRef', nullable: true })
  requestGoodsCodeRef: number | null;

  @Column({ type: 'numeric', name: 'RequestAndPurchaseQuantityCross', nullable: true })
  requestAndPurchaseQuantityCross: number | null;

  @Column({ type: 'numeric', name: 'PurchaseFreshQuantity', nullable: true })
  purchaseFreshQuantity: number | null;

  @Column({ type: 'numeric', name: 'ImpositionButInquiryRate', nullable: true })
  impositionButInquiryRate: number | null;

  @Column({ type: 'boolean', name: 'DardImposition', nullable: true })
  dardImposition: boolean | null;

  @Column({ type: 'numeric', name: 'AbatementAmount', nullable: true })
  abatementAmount: number | null;

  @Column({ type: 'bigint', name: 'GoodsEarmarkRef', nullable: true })
  goodsEarmarkRef: number | null;

  @Column({ type: 'numeric', name: 'YksalakhyrMyzankhrydTodayBalePurchaseBar', nullable: true })
  yksalakhyrMyzankhrydTodayBalePurchaseBar: number | null;

  @Column({ type: 'numeric', name: 'IsPaymentBehestQuantity', nullable: true })
  isPaymentBehestQuantity: number | null;

}