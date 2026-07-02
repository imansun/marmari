import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoicePaymentBehestPurchaseRequestItem' })
export class LegacyInvoicePaymentBehestPurchaseRequestItem {
  @PrimaryColumn({ type: 'bigint', name: 'InvoicePaymentBehestPurchaseRequestItemID' })
  invoicePaymentBehestPurchaseRequestItemID: number;

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