import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseOrImportGoodOrService' })
export class LegacyPurchaseOrImportGoodOrService {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseOrImportGoodOrServiceID' })
  purchaseOrImportGoodOrServiceID: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'PurchaseAggregateItems' })
  purchaseAggregateItems: number;

  @Column({ type: 'numeric', name: 'PurchaseFinalAmount' })
  purchaseFinalAmount: number;

  @Column({ type: 'numeric', name: 'VATPrepaymentAggregateItems', nullable: true })
  vATPrepaymentAggregateItems: number | null;

  @Column({ type: 'numeric', name: 'VATPrepaymentFinalAmount', nullable: true })
  vATPrepaymentFinalAmount: number | null;

  @Column({ type: 'numeric', name: 'TollPrepaymentAggregateItems', nullable: true })
  tollPrepaymentAggregateItems: number | null;

  @Column({ type: 'numeric', name: 'TollPrepaymentFinalAmount', nullable: true })
  tollPrepaymentFinalAmount: number | null;

  @Column({ type: 'integer', name: 'PurchaseOrSale', nullable: true })
  purchaseOrSale: number | null;

  @Column({ type: 'integer', name: 'TaxState', nullable: true })
  taxState: number | null;

  @Column({ type: 'integer', name: 'ItemOrService', nullable: true })
  itemOrService: number | null;

  @Column({ type: 'integer', name: 'TransactionType', nullable: true })
  transactionType: number | null;

  @Column({ type: 'bigint', name: 'VATStatementRef' })
  vATStatementRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}