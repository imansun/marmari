import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetirementReceiptReportSettingLoanType' })
export class LegacyRetirementReceiptReportSettingLoanType {
  @PrimaryColumn({ type: 'bigint', name: 'RetirementReceiptReportSettingLoanTypeID' })
  retirementReceiptReportSettingLoanTypeID: number;

  @Column({ type: 'bigint', name: 'RetirementReceiptReportSettingRef' })
  retirementReceiptReportSettingRef: number;

  @Column({ type: 'bigint', name: 'LoanTypeRef' })
  loanTypeRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}