import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StocktakingPeriod' })
export class LegacyStocktakingPeriod {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingPeriodID' })
  stocktakingPeriodID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bigint', name: 'StocktakingPolicyRef' })
  stocktakingPolicyRef: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'FinishDate' })
  finishDate: Date;

  @Column({ type: 'bigint', name: 'ResponsiblePartyRef' })
  responsiblePartyRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'integer', name: 'FractionalCounterpartEntityCode', nullable: true })
  fractionalCounterpartEntityCode: number | null;

  @Column({ type: 'bigint', name: 'FractionalCounterpartEntityRef', nullable: true })
  fractionalCounterpartEntityRef: number | null;

  @Column({ type: 'character varying', name: 'FractionalCounterpartEntityText', nullable: true })
  fractionalCounterpartEntityText: string | null;

  @Column({ type: 'integer', name: 'AdditionalCounterpartEntityCode', nullable: true })
  additionalCounterpartEntityCode: number | null;

  @Column({ type: 'bigint', name: 'AdditionalCounterpartEntityRef', nullable: true })
  additionalCounterpartEntityRef: number | null;

  @Column({ type: 'character varying', name: 'AdditionalCounterpartEntityText', nullable: true })
  additionalCounterpartEntityText: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'integer', name: 'CountStepState', nullable: true })
  countStepState: number | null;

}