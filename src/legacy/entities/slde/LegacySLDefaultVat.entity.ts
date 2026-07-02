import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SLDefaultVat' })
export class LegacySLDefaultVat {
  @PrimaryColumn({ type: 'bigint', name: 'SLDefaultVatID' })
  sLDefaultVatID: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'integer', name: 'TaxStateType', nullable: true })
  taxStateType: number | null;

  @Column({ type: 'integer', name: 'TransactionType', nullable: true })
  transactionType: number | null;

  @Column({ type: 'integer', name: 'PurchaseOrSale', nullable: true })
  purchaseOrSale: number | null;

  @Column({ type: 'integer', name: 'ItemOrServiceOrWithholdingTax', nullable: true })
  itemOrServiceOrWithholdingTax: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}