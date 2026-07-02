import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContentConfiguration' })
export class LegacyContentConfiguration {
  @PrimaryColumn({ type: 'bigint', name: 'ContentConfigurationID' })
  contentConfigurationID: number;

  @Column({ type: 'bigint', name: 'DocumentContentRef', nullable: true })
  documentContentRef: number | null;

  @Column({ type: 'bigint', name: 'ReceiptPaymentContentRef', nullable: true })
  receiptPaymentContentRef: number | null;

  @Column({ type: 'bigint', name: 'IdleContentRef', nullable: true })
  idleContentRef: number | null;

  @Column({ type: 'boolean', name: 'ShowProductImage' })
  showProductImage: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}