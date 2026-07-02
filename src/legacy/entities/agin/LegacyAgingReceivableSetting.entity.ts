import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AgingReceivableSetting' })
export class LegacyAgingReceivableSetting {
  @PrimaryColumn({ type: 'bigint', name: 'AgingReceivableSettingID' })
  agingReceivableSettingID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'FromFiscalYearRef' })
  fromFiscalYearRef: number;

  @Column({ type: 'bigint', name: 'ToFiscalYearRef' })
  toFiscalYearRef: number;

  @Column({ type: 'integer', name: 'CurrencyFeature' })
  currencyFeature: number;

  @Column({ type: 'integer', name: 'ReportType' })
  reportType: number;

  @Column({ type: 'character varying', name: 'PeriodTitle' })
  periodTitle: string;

  @Column({ type: 'numeric', name: 'PercentageperPeriod' })
  percentageperPeriod: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'character varying', name: 'VoucherTypeIds', nullable: true })
  voucherTypeIds: string | null;

  @Column({ type: 'character varying', name: 'BranchIds', nullable: true })
  branchIds: string | null;

  @Column({ type: 'character varying', name: 'GLIds', nullable: true })
  gLIds: string | null;

  @Column({ type: 'boolean', name: 'NoneNatureChecked' })
  noneNatureChecked: boolean;

  @Column({ type: 'numeric', name: 'FirstPercentage' })
  firstPercentage: number;

  @Column({ type: 'character varying', name: 'FromMonth', nullable: true })
  fromMonth: string | null;

  @Column({ type: 'character varying', name: 'ToMonth', nullable: true })
  toMonth: string | null;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}