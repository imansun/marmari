import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AgingReceivables' })
export class LegacyAgingReceivables {
  @PrimaryColumn({ type: 'bigint', name: 'AgingReceivablesID' })
  agingReceivablesID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'character varying', name: 'BranchCode' })
  branchCode: string;

  @Column({ type: 'character varying', name: 'SLCode' })
  sLCode: string;

  @Column({ type: 'character varying', name: 'SLTitle' })
  sLTitle: string;

  @Column({ type: 'character varying', name: 'SLTitle_En', nullable: true })
  sLTitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel4', nullable: true })
  dLLevel4: string | null;

  @Column({ type: 'character varying', name: 'DLLevel5', nullable: true })
  dLLevel5: string | null;

  @Column({ type: 'character varying', name: 'DLLevel6', nullable: true })
  dLLevel6: string | null;

  @Column({ type: 'character varying', name: 'DLLevel7', nullable: true })
  dLLevel7: string | null;

  @Column({ type: 'character varying', name: 'DLLevel8', nullable: true })
  dLLevel8: string | null;

  @Column({ type: 'character varying', name: 'DLLevel9', nullable: true })
  dLLevel9: string | null;

  @Column({ type: 'character varying', name: 'DLLevel4Title', nullable: true })
  dLLevel4Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel5Title', nullable: true })
  dLLevel5Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel6Title', nullable: true })
  dLLevel6Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel7Title', nullable: true })
  dLLevel7Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel8Title', nullable: true })
  dLLevel8Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel9Title', nullable: true })
  dLLevel9Title: string | null;

  @Column({ type: 'character varying', name: 'DLLevel4Title_En', nullable: true })
  dLLevel4TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel5Title_En', nullable: true })
  dLLevel5TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel6Title_En', nullable: true })
  dLLevel6TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel7Title_En', nullable: true })
  dLLevel7TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel8Title_En', nullable: true })
  dLLevel8TitleEn: string | null;

  @Column({ type: 'character varying', name: 'DLLevel9Title_En', nullable: true })
  dLLevel9TitleEn: string | null;

  @Column({ type: 'timestamp without time zone', name: 'RemainingFromDate' })
  remainingFromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'RemainingToDate' })
  remainingToDate: Date;

  @Column({ type: 'smallint', name: 'ReportType' })
  reportType: number;

  @Column({ type: 'numeric', name: 'RemainingDebit' })
  remainingDebit: number;

  @Column({ type: 'numeric', name: 'MisMatchedCredit' })
  misMatchedCredit: number;

  @Column({ type: 'numeric', name: 'Percentage' })
  percentage: number;

  @Column({ type: 'numeric', name: 'EstimatedUnCollectableReceivable' })
  estimatedUnCollectableReceivable: number;

  @Column({ type: 'character varying', name: 'PeriodicTitle' })
  periodicTitle: string;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'bigint', name: 'BranchRef', nullable: true })
  branchRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}