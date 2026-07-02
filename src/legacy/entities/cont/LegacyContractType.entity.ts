import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractType' })
export class LegacyContractType {
  @PrimaryColumn({ type: 'bigint', name: 'ContractTypeID' })
  contractTypeID: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'LongTermFacilities' })
  longTermFacilities: number;

  @Column({ type: 'bigint', name: 'ShortTermFacilities' })
  shortTermFacilities: number;

  @Column({ type: 'bigint', name: 'FutureInterestExpense' })
  futureInterestExpense: number;

  @Column({ type: 'bigint', name: 'InterestExpense' })
  interestExpense: number;

  @Column({ type: 'bigint', name: 'DelayFines' })
  delayFines: number;

  @Column({ type: 'bigint', name: 'InterestExpenseAllowance' })
  interestExpenseAllowance: number;

  @Column({ type: 'bigint', name: 'DelayFinesAllowance' })
  delayFinesAllowance: number;

  @Column({ type: 'bigint', name: 'PayableInterest' })
  payableInterest: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}