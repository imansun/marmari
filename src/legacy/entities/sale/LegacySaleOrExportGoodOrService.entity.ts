import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SaleOrExportGoodOrService' })
export class LegacySaleOrExportGoodOrService {
  @PrimaryColumn({ type: 'bigint', name: 'SaleOrExportGoodOrServiceID' })
  saleOrExportGoodOrServiceID: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'SaleAggregateItems' })
  saleAggregateItems: number;

  @Column({ type: 'numeric', name: 'SaleFinalAmount' })
  saleFinalAmount: number;

  @Column({ type: 'numeric', name: 'VATPayableAggregateItems', nullable: true })
  vATPayableAggregateItems: number | null;

  @Column({ type: 'numeric', name: 'VATPayableFinalAmount', nullable: true })
  vATPayableFinalAmount: number | null;

  @Column({ type: 'numeric', name: 'TollPayableAggregateItems', nullable: true })
  tollPayableAggregateItems: number | null;

  @Column({ type: 'numeric', name: 'TollPayableFinalAmount', nullable: true })
  tollPayableFinalAmount: number | null;

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