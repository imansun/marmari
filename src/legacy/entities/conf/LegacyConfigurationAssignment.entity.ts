import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfigurationAssignment' })
export class LegacyConfigurationAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'ConfigurationAssignmentID' })
  configurationAssignmentID: number;

  @Column({ type: 'bigint', name: 'BudgetingConfigRef' })
  budgetingConfigRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}