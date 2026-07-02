import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetirementReportSetting' })
export class LegacyRetirementReportSetting {
  @PrimaryColumn({ type: 'bigint', name: 'RetirementReportSettingID' })
  retirementReportSettingID: number;

  @Column({ type: 'bigint', name: 'ReportSettingRef' })
  reportSettingRef: number;

  @Column({ type: 'bigint', name: 'BankRef', nullable: true })
  bankRef: number | null;

  @Column({ type: 'bigint', name: 'BankBranchRef', nullable: true })
  bankBranchRef: number | null;

  @Column({ type: 'character varying', name: 'AccountNumber', nullable: true })
  accountNumber: string | null;

  @Column({ type: 'bigint', name: 'FinancialManagerRef', nullable: true })
  financialManagerRef: number | null;

  @Column({ type: 'character varying', name: 'SaveCode', nullable: true })
  saveCode: string | null;

  @Column({ type: 'character varying', name: 'DeviceName', nullable: true })
  deviceName: string | null;

  @Column({ type: 'character varying', name: 'DeviceAddress', nullable: true })
  deviceAddress: string | null;

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