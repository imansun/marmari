import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailShopReceiptPaymentConfigEReceipt' })
export class LegacyRetailShopReceiptPaymentConfigEReceipt {
  @PrimaryColumn({ type: 'bigint', name: 'RetailShopReceiptPaymentConfigEReceiptID' })
  retailShopReceiptPaymentConfigEReceiptID: number;

  @Column({ type: 'bigint', name: 'RetailShopReceiptPaymentConfigRef' })
  retailShopReceiptPaymentConfigRef: number;

  @Column({ type: 'bigint', name: 'BankAccountRef' })
  bankAccountRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}