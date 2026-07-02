import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InquiryExtension' })
export class LegacyInquiryExtension {
  @PrimaryColumn({ type: 'bigint', name: 'InquiryExtensionID' })
  inquiryExtensionID: number;

  @Column({ type: 'bigint', name: 'InquiryRef' })
  inquiryRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}