import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InquirySupplierExtension' })
export class LegacyInquirySupplierExtension {
  @PrimaryColumn({ type: 'bigint', name: 'InquirySupplierExtensionID' })
  inquirySupplierExtensionID: number;

  @Column({ type: 'bigint', name: 'InquiryExtensionRef' })
  inquiryExtensionRef: number;

  @Column({ type: 'bigint', name: 'InquirySupplierRef' })
  inquirySupplierRef: number;

  @Column({ type: 'character varying', name: 'Message', nullable: true })
  message: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}