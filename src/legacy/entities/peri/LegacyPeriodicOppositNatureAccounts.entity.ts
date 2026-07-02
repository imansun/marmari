import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PeriodicOppositNatureAccounts' })
export class LegacyPeriodicOppositNatureAccounts {
  @PrimaryColumn({ type: 'bigint', name: 'PeriodicOppositNatureAccountsID' })
  periodicOppositNatureAccountsID: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'character varying', name: 'BranchCode' })
  branchCode: string;

  @Column({ type: 'character varying', name: 'BranchTitle' })
  branchTitle: string;

  @Column({ type: 'character varying', name: 'BranchTitle_En', nullable: true })
  branchTitleEn: string | null;

  @Column({ type: 'bigint', name: 'VoucherItemID' })
  voucherItemID: number;

  @Column({ type: 'integer', name: 'VoucherNumber' })
  voucherNumber: number;

  @Column({ type: 'integer', name: 'VoucherSequence' })
  voucherSequence: number;

  @Column({ type: 'timestamp without time zone', name: 'VoucherDate' })
  voucherDate: Date;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'integer', name: 'NewNature' })
  newNature: number;

  @Column({ type: 'numeric', name: 'RunningValue' })
  runningValue: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'character varying', name: 'SLTitle' })
  sLTitle: string;

  @Column({ type: 'character varying', name: 'SLTitle_En', nullable: true })
  sLTitleEn: string | null;

  @Column({ type: 'character varying', name: 'SLCode' })
  sLCode: string;

  @Column({ type: 'character varying', name: 'DLLevel4Title', nullable: true })
  dLLevel4Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel4Title_En', nullable: true })
  dLLevel4TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel4Code', nullable: true })
  dLLevel4Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel5Title', nullable: true })
  dLLevel5Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel5Title_En', nullable: true })
  dLLevel5TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel5Code', nullable: true })
  dLLevel5Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel6Title', nullable: true })
  dLLevel6Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel6Title_En', nullable: true })
  dLLevel6TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel6Code', nullable: true })
  dLLevel6Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel7Title', nullable: true })
  dLLevel7Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel7Title_En', nullable: true })
  dLLevel7TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel7Code', nullable: true })
  dLLevel7Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel8Title', nullable: true })
  dLLevel8Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel8Title_En', nullable: true })
  dLLevel8TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel8Code', nullable: true })
  dLLevel8Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel9Title', nullable: true })
  dLLevel9Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel9Title_En', nullable: true })
  dLLevel9TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel9Code', nullable: true })
  dLLevel9Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel10Title', nullable: true })
  dLLevel10Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel10Title_En', nullable: true })
  dLLevel10TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel10Code', nullable: true })
  dLLevel10Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel11Title', nullable: true })
  dLLevel11Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel11Title_En', nullable: true })
  dLLevel11TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel11Code', nullable: true })
  dLLevel11Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel12Title', nullable: true })
  dLLevel12Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel12Title_En', nullable: true })
  dLLevel12TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel12Code', nullable: true })
  dLLevel12Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel13Title', nullable: true })
  dLLevel13Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel13Title_En', nullable: true })
  dLLevel13TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel13Code', nullable: true })
  dLLevel13Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel14Title', nullable: true })
  dLLevel14Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel14Title_En', nullable: true })
  dLLevel14TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel14Code', nullable: true })
  dLLevel14Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel15Title', nullable: true })
  dLLevel15Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel15Title_En', nullable: true })
  dLLevel15TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel15Code', nullable: true })
  dLLevel15Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel16Title', nullable: true })
  dLLevel16Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel16Title_En', nullable: true })
  dLLevel16TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel16Code', nullable: true })
  dLLevel16Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel17Title', nullable: true })
  dLLevel17Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel17Title_En', nullable: true })
  dLLevel17TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel17Code', nullable: true })
  dLLevel17Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel18Title', nullable: true })
  dLLevel18Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel18Title_En', nullable: true })
  dLLevel18TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel18Code', nullable: true })
  dLLevel18Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel19Title', nullable: true })
  dLLevel19Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel19Title_En', nullable: true })
  dLLevel19TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel19Code', nullable: true })
  dLLevel19Code: string | null;

  @Column({ type: 'character varying', name: 'DLLevel20Title', nullable: true })
  dLLevel20Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel20Title_En', nullable: true })
  dLLevel20TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel20Code', nullable: true })
  dLLevel20Code: string | null;

  @Column({ type: 'bigint', name: 'BaseCurrencyRef', nullable: true })
  baseCurrencyRef: number | null;

  @Column({ type: 'character varying', name: 'BaseCurrencyTitle', nullable: true })
  baseCurrencyTitle: string | null;

  @Column({ type: 'character varying', name: 'BaseCurrencyTitle_En', nullable: true })
  baseCurrencyTitleEn: string | null;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'integer', name: 'VoucherDailyNumber' })
  voucherDailyNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}