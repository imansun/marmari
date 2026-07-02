import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailShopFranchiseSettings' })
export class LegacyRetailShopFranchiseSettings {
  @PrimaryColumn({ type: 'bigint', name: 'RetailShopFranchiseSettingsID' })
  retailShopFranchiseSettingsID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'boolean', name: 'IsIssueVoucherEnabled' })
  isIssueVoucherEnabled: boolean;

  @Column({ type: 'boolean', name: 'IsHeadOfficePerformanceSummaryPaymentEnabled' })
  isHeadOfficePerformanceSummaryPaymentEnabled: boolean;

  @Column({ type: 'boolean', name: 'IsTaxPayerEnabled' })
  isTaxPayerEnabled: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}