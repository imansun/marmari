import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompensationTax' })
export class LegacyCompensationTax {
  @PrimaryColumn({ type: 'bigint', name: 'CompensationTaxID' })
  compensationTaxID: number;

  @Column({ type: 'bigint', name: 'CompensationCalcTypeRef' })
  compensationCalcTypeRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @Column({ type: 'numeric', name: 'CurrentIncomeContinuousCash' })
  currentIncomeContinuousCash: number;

  @Column({ type: 'numeric', name: 'CurrentIncomeContinuousNonCash' })
  currentIncomeContinuousNonCash: number;

  @Column({ type: 'numeric', name: 'CurrentIncomeDiscontinuousNonCash' })
  currentIncomeDiscontinuousNonCash: number;

  @Column({ type: 'numeric', name: 'CurrentIncomeDiscontinuousCash' })
  currentIncomeDiscontinuousCash: number;

  @Column({ type: 'numeric', name: 'YearlyIncomeContinuousCash' })
  yearlyIncomeContinuousCash: number;

  @Column({ type: 'numeric', name: 'YearlyIncomeContinuousNonCash' })
  yearlyIncomeContinuousNonCash: number;

  @Column({ type: 'numeric', name: 'YearlyIncomeDiscontinuousNonCash' })
  yearlyIncomeDiscontinuousNonCash: number;

  @Column({ type: 'numeric', name: 'YearlyIncomeDiscontinuousCash' })
  yearlyIncomeDiscontinuousCash: number;

  @Column({ type: 'numeric', name: 'YearlyIncome' })
  yearlyIncome: number;

  @Column({ type: 'numeric', name: 'YearlyTax' })
  yearlyTax: number;

  @Column({ type: 'numeric', name: 'YearlyIncomeContinuousNonCashAfterExemption9113' })
  yearlyIncomeContinuousNonCashAfterExemption9113: number;

  @Column({ type: 'numeric', name: 'YearlyIncomeNonCash' })
  yearlyIncomeNonCash: number;

  @Column({ type: 'numeric', name: 'YearlyIncomeContinuousCashAndNonCash' })
  yearlyIncomeContinuousCashAndNonCash: number;

  @Column({ type: 'numeric', name: 'YearlyTaxForContinuousCashAndNonCash' })
  yearlyTaxForContinuousCashAndNonCash: number;

  @Column({ type: 'numeric', name: 'DiscontinuousPaymentTax' })
  discontinuousPaymentTax: number;

  @Column({ type: 'numeric', name: 'ContinuousPaymentTax' })
  continuousPaymentTax: number;

  @Column({ type: 'numeric', name: 'TotalTax' })
  totalTax: number;

  @Column({ type: 'numeric', name: 'MonthlyTax' })
  monthlyTax: number;

  @Column({ type: 'numeric', name: 'Tax' })
  tax: number;

  @Column({ type: 'numeric', name: 'TaxPaidSurplus' })
  taxPaidSurplus: number;

  @Column({ type: 'numeric', name: 'CurrentTaxSurplus' })
  currentTaxSurplus: number;

  @Column({ type: 'numeric', name: 'TotalAttendanceMonths' })
  totalAttendanceMonths: number;

  @Column({ type: 'boolean', name: 'IsTreasury' })
  isTreasury: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'TaxDiscount', default: 0 })
  taxDiscount: number;

  @Column({ type: 'numeric', name: 'Exemption9113Reminder', default: 0 })
  exemption9113Reminder: number;

}