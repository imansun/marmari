import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PettyCash' })
export class LegacyPettyCash {
  @PrimaryColumn({ type: 'bigint', name: 'PettyCashID' })
  pettyCashID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'PettyCashOwnerRef' })
  pettyCashOwnerRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'InitialCash' })
  initialCash: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyInitialCash' })
  operationalCurrencyInitialCash: number;

  @Column({ type: 'numeric', name: 'MaximumCash' })
  maximumCash: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'character varying', name: 'DL4', nullable: true })
  dL4: string | null;

  @Column({ type: 'character varying', name: 'DL5', nullable: true })
  dL5: string | null;

  @Column({ type: 'character varying', name: 'DL6', nullable: true })
  dL6: string | null;

  @Column({ type: 'character varying', name: 'DL7', nullable: true })
  dL7: string | null;

  @Column({ type: 'character varying', name: 'DL8', nullable: true })
  dL8: string | null;

  @Column({ type: 'character varying', name: 'DL9', nullable: true })
  dL9: string | null;

  @Column({ type: 'bigint', name: 'AccountRef', nullable: true })
  accountRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DeploymentDate', nullable: true })
  deploymentDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'DL10', nullable: true })
  dL10: string | null;

  @Column({ type: 'character varying', name: 'DL11', nullable: true })
  dL11: string | null;

  @Column({ type: 'character varying', name: 'DL12', nullable: true })
  dL12: string | null;

  @Column({ type: 'character varying', name: 'DL13', nullable: true })
  dL13: string | null;

  @Column({ type: 'character varying', name: 'DL14', nullable: true })
  dL14: string | null;

  @Column({ type: 'character varying', name: 'DL15', nullable: true })
  dL15: string | null;

  @Column({ type: 'character varying', name: 'DL16', nullable: true })
  dL16: string | null;

  @Column({ type: 'character varying', name: 'DL17', nullable: true })
  dL17: string | null;

  @Column({ type: 'character varying', name: 'DL18', nullable: true })
  dL18: string | null;

  @Column({ type: 'character varying', name: 'DL19', nullable: true })
  dL19: string | null;

  @Column({ type: 'character varying', name: 'DL20', nullable: true })
  dL20: string | null;

  @Column({ type: 'boolean', name: 'HasCard', default: false })
  hasCard: boolean;

  @Column({ type: 'bigint', name: 'PettyCashCardRef', nullable: true })
  pettyCashCardRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}