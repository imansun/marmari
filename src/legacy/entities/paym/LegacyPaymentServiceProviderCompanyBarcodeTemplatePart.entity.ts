import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentServiceProviderCompanyBarcodeTemplatePart' })
export class LegacyPaymentServiceProviderCompanyBarcodeTemplatePart {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentServiceProviderCompanyBarcodeTemplatePartID' })
  paymentServiceProviderCompanyBarcodeTemplatePartID: number;

  @Column({ type: 'bigint', name: 'PaymentServiceProviderCompanyBarcodeTemplateRef' })
  paymentServiceProviderCompanyBarcodeTemplateRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'Position' })
  position: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}