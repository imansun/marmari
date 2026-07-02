import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountDeploymentSettingsReceiptAndPaymentCashRegister' })
export class LegacyAccountDeploymentSettingsReceiptAndPaymentCashRegister {
  @PrimaryColumn({ type: 'bigint', name: 'AccountDeploymentSettingsReceiptAndPaymentCashRegisterID' })
  accountDeploymentSettingsReceiptAndPaymentCashRegisterID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'ReceiptAndPaymentCashRegisterRef', nullable: true })
  receiptAndPaymentCashRegisterRef: number | null;

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