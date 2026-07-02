import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetirementReceiptReportSetting' })
export class LegacyRetirementReceiptReportSetting {
  @PrimaryColumn({ type: 'bigint', name: 'RetirementReceiptReportSettingID' })
  retirementReceiptReportSettingID: number;

  @Column({ type: 'bigint', name: 'ReportSettingRef' })
  reportSettingRef: number;

  @Column({ type: 'character varying', name: 'RelatedOrganizationName', nullable: true })
  relatedOrganizationName: string | null;

  @Column({ type: 'character varying', name: 'PaymentOrganizationName', nullable: true })
  paymentOrganizationName: string | null;

  @Column({ type: 'bigint', name: 'AccountNumberFactorRef' })
  accountNumberFactorRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}