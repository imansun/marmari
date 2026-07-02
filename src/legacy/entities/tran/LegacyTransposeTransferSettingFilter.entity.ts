import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransposeTransferSettingFilter' })
export class LegacyTransposeTransferSettingFilter {
  @PrimaryColumn({ type: 'bigint', name: 'TransposeTransferSettingFilterID' })
  transposeTransferSettingFilterID: number;

  @Column({ type: 'bigint', name: 'TransposeTransferSettingRef' })
  transposeTransferSettingRef: number;

  @Column({ type: 'character varying', name: 'PeriodNatureTypeSelection', nullable: true })
  periodNatureTypeSelection: string | null;

  @Column({ type: 'character varying', name: 'CarryOverFiscalYearSelection', nullable: true })
  carryOverFiscalYearSelection: string | null;

  @Column({ type: 'character varying', name: 'BudgetEntityTypeSelection', nullable: true })
  budgetEntityTypeSelection: string | null;

  @Column({ type: 'character varying', name: 'BranchSelection', nullable: true })
  branchSelection: string | null;

  @Column({ type: 'character varying', name: 'PaymentTypeSlSelection', nullable: true })
  paymentTypeSlSelection: string | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'character varying', name: 'ReferenceRefSelection', nullable: true })
  referenceRefSelection: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}