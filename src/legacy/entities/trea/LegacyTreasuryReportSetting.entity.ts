import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TreasuryReportSetting' })
export class LegacyTreasuryReportSetting {
  @PrimaryColumn({ type: 'bigint', name: 'TreasuryReportSettingID' })
  treasuryReportSettingID: number;

  @Column({ type: 'bigint', name: 'ReportSettingRef' })
  reportSettingRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'character varying', name: 'AccountNumber', nullable: true })
  accountNumber: string | null;

  @Column({ type: 'bigint', name: 'BankRef', nullable: true })
  bankRef: number | null;

  @Column({ type: 'bigint', name: 'BankBranchRef', nullable: true })
  bankBranchRef: number | null;

  @Column({ type: 'character varying', name: 'OrganizationTitle', nullable: true })
  organizationTitle: string | null;

  @Column({ type: 'character varying', name: 'OrganizationNo', nullable: true })
  organizationNo: string | null;

  @Column({ type: 'character varying', name: 'OrganizationBranch', nullable: true })
  organizationBranch: string | null;

  @Column({ type: 'character varying', name: 'Office', nullable: true })
  office: string | null;

  @Column({ type: 'bigint', name: 'TreasuryExpertRef', nullable: true })
  treasuryExpertRef: number | null;

  @Column({ type: 'bigint', name: 'OfficeBossRef', nullable: true })
  officeBossRef: number | null;

  @Column({ type: 'bigint', name: 'TreasuryPaymentOfficeBossRef', nullable: true })
  treasuryPaymentOfficeBossRef: number | null;

  @Column({ type: 'bigint', name: 'TreasuryManagerRef', nullable: true })
  treasuryManagerRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}