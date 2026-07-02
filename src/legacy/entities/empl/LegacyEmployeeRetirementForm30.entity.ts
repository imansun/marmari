import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRetirementForm30' })
export class LegacyEmployeeRetirementForm30 {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRetirementForm30ID' })
  employeeRetirementForm30ID: number;

  @Column({ type: 'bigint', name: 'EmployeeRetirementFormRef' })
  employeeRetirementFormRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'numeric', name: 'BasePay' })
  basePay: number;

  @Column({ type: 'numeric', name: 'AnnualIncrease' })
  annualIncrease: number;

  @Column({ type: 'numeric', name: 'JobAllowance' })
  jobAllowance: number;

  @Column({ type: 'numeric', name: 'RecruitmentPay' })
  recruitmentPay: number;

  @Column({ type: 'numeric', name: 'SuperProminent' })
  superProminent: number;

  @Column({ type: 'numeric', name: 'SupervisorPay' })
  supervisorPay: number;

  @Column({ type: 'numeric', name: 'ExpertisePay' })
  expertisePay: number;

  @Column({ type: 'numeric', name: 'HardshipPay' })
  hardshipPay: number;

  @Column({ type: 'numeric', name: 'MatchDifference' })
  matchDifference: number;

  @Column({ type: 'numeric', name: 'Adjustment' })
  adjustment: number;

  @Column({ type: 'numeric', name: 'SpecialPay' })
  specialPay: number;

  @Column({ type: 'integer', name: 'DayTime' })
  dayTime: number;

  @Column({ type: 'character varying', name: 'RankTitle' })
  rankTitle: string;

  @Column({ type: 'bigint', name: 'PostRef' })
  postRef: number;

  @Column({ type: 'numeric', name: 'Sum' })
  sum: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'JobRankCode', nullable: true })
  jobRankCode: number | null;

}