import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportTypeSetting' })
export class LegacyReportTypeSetting {
  @PrimaryColumn({ type: 'bigint', name: 'ReportTypeSettingID' })
  reportTypeSettingID: number;

  @Column({ type: 'integer', name: 'ReportType' })
  reportType: number;

  @Column({ type: 'integer', name: 'OperationalCurrencyAmountFormat', nullable: true })
  operationalCurrencyAmountFormat: number | null;

  @Column({ type: 'integer', name: 'AmountFormat', nullable: true })
  amountFormat: number | null;

  @Column({ type: 'boolean', name: 'ShowAmountFormat' })
  showAmountFormat: boolean;

  @Column({ type: 'boolean', name: 'ShowCompanyName' })
  showCompanyName: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}