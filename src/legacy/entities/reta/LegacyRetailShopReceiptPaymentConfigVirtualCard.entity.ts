import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailShopReceiptPaymentConfigVirtualCard' })
export class LegacyRetailShopReceiptPaymentConfigVirtualCard {
  @PrimaryColumn({ type: 'bigint', name: 'RetailShopReceiptPaymentConfigVirtualCardID' })
  retailShopReceiptPaymentConfigVirtualCardID: number;

  @Column({ type: 'bigint', name: 'RetailShopReceiptPaymentConfigRef' })
  retailShopReceiptPaymentConfigRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}