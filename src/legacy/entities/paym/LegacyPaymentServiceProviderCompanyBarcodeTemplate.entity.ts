import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentServiceProviderCompanyBarcodeTemplate' })
export class LegacyPaymentServiceProviderCompanyBarcodeTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentServiceProviderCompanyBarcodeTemplateID' })
  paymentServiceProviderCompanyBarcodeTemplateID: number;

  @Column({ type: 'bigint', name: 'PaymentServiceProviderCompanyRef' })
  paymentServiceProviderCompanyRef: number;

  @Column({ type: 'character varying', name: 'Separator', nullable: true })
  separator: string | null;

  @Column({ type: 'character varying', name: 'DescriptionTemplate', nullable: true })
  descriptionTemplate: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}