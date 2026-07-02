import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailShopReceiptPaymentConfig' })
export class LegacyRetailShopReceiptPaymentConfig {
  @PrimaryColumn({ type: 'bigint', name: 'RetailShopReceiptPaymentConfigID' })
  retailShopReceiptPaymentConfigID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'integer', name: 'ElectronicReceiptTransmission' })
  electronicReceiptTransmission: number;

  @Column({ type: 'integer', name: 'BankReceiptTransmission' })
  bankReceiptTransmission: number;

  @Column({ type: 'boolean', name: 'IsChequeInformationOptional' })
  isChequeInformationOptional: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'ProductCouponTransmission' })
  productCouponTransmission: number;

}