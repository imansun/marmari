import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetEntity' })
export class LegacyBudgetEntity {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetEntityID' })
  budgetEntityID: number;

  @Column({ type: 'bigint', name: 'BudgetEntityDefinitionRef' })
  budgetEntityDefinitionRef: number;

  @Column({ type: 'bigint', name: 'BudgetEntityClassificationRef' })
  budgetEntityClassificationRef: number;

  @Column({ type: 'bigint', name: 'RootID' })
  rootID: number;

  @Column({ type: 'bigint', name: 'AmendedBudgetEntityRef', nullable: true })
  amendedBudgetEntityRef: number | null;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BudgetEntityTypeRef', nullable: true })
  budgetEntityTypeRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'BasisBudgetEntityRef', nullable: true })
  basisBudgetEntityRef: number | null;

  @Column({ type: 'bigint', name: 'BasisBudgetEntityRootID', nullable: true })
  basisBudgetEntityRootID: number | null;

  @Column({ type: 'integer', name: 'RegisterType' })
  registerType: number;

  @Column({ type: 'integer', name: 'AmendmentType' })
  amendmentType: number;

  @Column({ type: 'boolean', name: 'IsAmended' })
  isAmended: boolean;

  @Column({ type: 'integer', name: 'PaymentReferenceType', nullable: true })
  paymentReferenceType: number | null;

  @Column({ type: 'bigint', name: 'PaymentReferenceRef', nullable: true })
  paymentReferenceRef: number | null;

  @Column({ type: 'integer', name: 'PeriodNatureType' })
  periodNatureType: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'TransposeLogRef', nullable: true })
  transposeLogRef: number | null;

  @Column({ type: 'bigint', name: 'CarryOverFiscalYearRef', nullable: true })
  carryOverFiscalYearRef: number | null;

  @Column({ type: 'integer', name: 'ReturnType', default: 1 })
  returnType: number;

  @Column({ type: 'bigint', name: 'BatchAmendingLogRef', nullable: true })
  batchAmendingLogRef: number | null;

}